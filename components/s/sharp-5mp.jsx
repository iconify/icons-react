import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}

.sh_2hxb4z {
  fill: currentColor;
  d: path("M3 3v18h18V3zm7 7h3V9h-3V5.5h4.5V7h-3v1h3v3.5H10zm2.5 8.5H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM18 17h-3v1.5h-1.5v-6H18z");
}
</style><path class="k4n51fjcs"/><path class="sh_2hxb4z"/>`,
		"fallback": "ic:sharp-5mp",
	});
}

export default Component;

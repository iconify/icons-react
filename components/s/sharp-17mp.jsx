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
		"content": `<style>.b0vefmbhj {
  fill: currentColor;
  d: path("M3 3v18h18V3zm4 2.5h3v6H8.5V7H7zm5.5 13H11V14h-1v3H8.5v-3h-1v4.5H6v-6h6.5zM12 7V5.5h4.87l-1.87 6h-1.75L14.62 7zm6 10h-3v1.5h-1.5v-6H18z");
}

.k4n51fjcs {
  fill: currentColor;
  d: path("M15 14h1.5v1.5H15z");
}
</style><path class="b0vefmbhj"/><path class="k4n51fjcs"/>`,
		"fallback": "ic:sharp-17mp",
	});
}

export default Component;

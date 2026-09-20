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
		"content": `<style>.houz7v39f {
  fill: currentColor;
  d: path("M5 20V9.5l7-5.27l7 5.27V20zm1-1h7.5v-3.75H6zm8.5 0H18v-3.75h-3.5zM6 14.25h3.5v-3.744H6zm4.5 0H18v-3.744h-7.5zM6.627 9.525h10.746L12 5.5z");
}
</style><path class="houz7v39f"/>`,
		"fallback": "material-symbols-light:nest-multi-room-outline-sharp",
	});
}

export default Component;

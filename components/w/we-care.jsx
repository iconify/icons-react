import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.aurknm4ux {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M45.499 24.199c-.1 10.638-7.965 19.603-18.499 21.087V2.714a21.5 21.5 0 0 1 17.714 15.528L3.287 29.76A21.5 21.5 0 0 0 21 45.286V2.716C10.466 4.2 2.601 13.166 2.501 23.803");
}
</style><path class="aurknm4ux"/>`,
		"fallback": "arcticons:we-care",
	});
}

export default Component;

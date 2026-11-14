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
		"content": `<style>.lc9fp83zd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m6 0h11m-3.5-3.5L20 7l-3.5 3.5M17 17a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-2 0H4m3.5-3.5L4 17l3.5 3.5");
}
</style><path class="lc9fp83zd"/>`,
		"fallback": "uix:transfer-horizontal",
	});
}

export default Component;

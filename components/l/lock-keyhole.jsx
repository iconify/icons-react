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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ou32v1b6s {
  d: path("M10.5 14.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m1.5 1.5v1.75");
}

.u34nf7zvd {
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-2.25A4.375 4.375 0 0 1 8.875 10M8 10V7a4 4 0 0 1 8 0v3");
}
</style><g class="hntgybcog"><path class="u34nf7zvd"/><path class="ou32v1b6s"/></g>`,
		"fallback": "uix:lock-keyhole",
	});
}

export default Component;

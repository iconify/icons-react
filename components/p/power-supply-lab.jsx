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

.m0i3posrr {
  d: path("M7.25 8h2.5a1.75 1.75 0 0 1 1.75 1.75v1a1.75 1.75 0 0 1-1.75 1.75h-2.5a1.75 1.75 0 0 1-1.75-1.75v-1A1.75 1.75 0 0 1 7.25 8m7.25 4a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 16h.01M10 16h.01");
}

.mtuecs9vi {
  d: path("M6 5h12a3.5 3.5 0 0 1 3.5 3.5v7A3.5 3.5 0 0 1 18 19H6a3.5 3.5 0 0 1-3.5-3.5v-7A3.5 3.5 0 0 1 6 5");
}
</style><g class="hntgybcog"><path class="mtuecs9vi"/><path class="m0i3posrr"/></g>`,
		"fallback": "uix:power-supply-lab",
	});
}

export default Component;

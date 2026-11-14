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
		"content": `<style>.f1iyce6_y {
  d: path("m12 2.5l8.25 4.75v9.5L12 21.5l-8.25-4.75v-9.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.t-s9lw8qq {
  d: path("M3.75 7.25h16.5L12 21.5Z");
}
</style><g class="hntgybcog"><path class="f1iyce6_y"/><path class="t-s9lw8qq"/></g>`,
		"fallback": "uix:low-poly",
	});
}

export default Component;

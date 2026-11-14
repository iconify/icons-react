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

.nthnoib9k {
  d: path("m9 11l3-3l3 3");
}

.uvlbt9b6j {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6ZM12 8v7.5");
}
</style><g class="hntgybcog"><path class="uvlbt9b6j"/><path class="nthnoib9k"/></g>`,
		"fallback": "uix:shield-up",
	});
}

export default Component;

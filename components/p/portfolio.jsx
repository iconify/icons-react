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
		"content": `<style>.apo-85o9m {
  d: path("m6.5 16.5l3-3L12 15l5.5-4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.smodpab5h {
  d: path("M7.375 7h9.25A4.375 4.375 0 0 1 21 11.375v4.25A4.375 4.375 0 0 1 16.625 20h-9.25A4.375 4.375 0 0 1 3 15.625v-4.25A4.375 4.375 0 0 1 7.375 7M9 7V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V7");
}
</style><g class="hntgybcog"><path class="smodpab5h"/><path class="apo-85o9m"/></g>`,
		"fallback": "uix:portfolio",
	});
}

export default Component;

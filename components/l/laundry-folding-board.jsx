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
		"content": `<style>.e20ovebdn {
  d: path("M10 6.5a2 2 0 0 0 4 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tnqpq90ur {
  d: path("M2.5 12h19M5 12l-1.5 5.5M19 12l1.5 5.5m-11-11h5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 14.5 12h-5a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 9.5 6.5");
}
</style><g class="hntgybcog"><path class="tnqpq90ur"/><path class="e20ovebdn"/></g>`,
		"fallback": "uix:laundry-folding-board",
	});
}

export default Component;

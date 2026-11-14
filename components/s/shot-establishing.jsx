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

.selk_oake {
  d: path("M6 6h12a3.5 3.5 0 0 1 3.5 3.5v5A3.5 3.5 0 0 1 18 18H6a3.5 3.5 0 0 1-3.5-3.5v-5A3.5 3.5 0 0 1 6 6");
}

.udtp2gbhb {
  d: path("M6 10.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M2.5 16.5q4.5-3.5 9-1q5-4.5 10 0");
}
</style><g class="hntgybcog"><path class="selk_oake"/><path class="udtp2gbhb"/></g>`,
		"fallback": "uix:shot-establishing",
	});
}

export default Component;

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
		"content": `<style>.c_v_accmd {
  d: path("M8.75 9.75C7.75 9 6.5 9 5.5 9.5v6c1-.5 2.25-.5 3.25.25C9.75 15 11 15 12 15.5v-6c-1-.5-2.25-.5-3.25.25m0 0v6M15 10.5h3.5M15 14h3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.poz_fvbbz {
  d: path("M6.875 5h10.25A4.375 4.375 0 0 1 21.5 9.375v5.25A4.375 4.375 0 0 1 17.125 19H6.875A4.375 4.375 0 0 1 2.5 14.625v-5.25A4.375 4.375 0 0 1 6.875 5");
}
</style><g class="hntgybcog"><path class="poz_fvbbz"/><path class="c_v_accmd"/></g>`,
		"fallback": "uix:kids-library-card",
	});
}

export default Component;

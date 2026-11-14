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
		"content": `<style>.h_ngtdbqw {
  d: path("M4.5 16.5v2a7.5 3 0 0 0 15 0v-2m-7.5-3V7m0 2c0-3.5 2.5-6 7-6c0 3.5-2.5 6-7 6m0 1.5C12 8 10 6 6 6c0 2.75 2 4.5 6 4.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2mrntebp {
  d: path("M4.5 16.5a7.5 3 0 1 0 15 0a7.5 3 0 1 0-15 0");
}
</style><g class="hntgybcog"><path class="v2mrntebp"/><path class="h_ngtdbqw"/></g>`,
		"fallback": "uix:seed-funding",
	});
}

export default Component;

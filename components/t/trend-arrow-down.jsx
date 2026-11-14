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

.u0--oacrk {
  d: path("M3 5c7 0 12 8 17 13");
}

.v9x-dtmmv {
  d: path("M15 18h5v-5");
}
</style><g class="hntgybcog"><path class="u0--oacrk"/><path class="v9x-dtmmv"/></g>`,
		"fallback": "uix:trend-arrow-down",
	});
}

export default Component;

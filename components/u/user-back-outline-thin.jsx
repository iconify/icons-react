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

.nuz6-76is {
  d: path("M15 12h6");
}

.ppbx_abyw {
  d: path("M6 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.v-u0ijc7h {
  d: path("M3 21a6 6 0 0 1 12 0");
}

.we_q5ubzl {
  d: path("M17 9.5 14.5 12l2.5 2.5");
}
</style><g class="hntgybcog"><path class="ppbx_abyw"/><path class="v-u0ijc7h"/><path class="nuz6-76is"/><path class="we_q5ubzl"/></g>`,
		"fallback": "iconmind:user-back-outline-thin",
	});
}

export default Component;

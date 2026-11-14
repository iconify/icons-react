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

.rk_ym7bjm {
  d: path("M6 7.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M5 21.5v-4a3.5 3.5 0 0 1 7 0v4m3.25-9a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0m-.5 9v-2.25a2.25 2.25 0 0 1 4.5 0v2.25");
}

.u_f-ygbmh {
  d: path("M2 21.5v-19h20v19");
}
</style><g class="hntgybcog"><path class="u_f-ygbmh"/><path class="rk_ym7bjm"/></g>`,
		"fallback": "uix:parking-bay-family",
	});
}

export default Component;

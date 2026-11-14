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

.rqsy0jx5l {
  d: path("m15.051 8.923l3.015 5.361a3.5 3.5 0 0 1-3.05 5.216H8.984a3.5 3.5 0 0 1-3.05-5.216l3.015-5.361a3.5 3.5 0 0 1 6.102 0");
}

.z-f0_ttsg {
  d: path("M10 13.5h4a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-4A1.5 1.5 0 0 1 8.5 18v-3a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="rqsy0jx5l"/><path class="z-f0_ttsg"/></g>`,
		"fallback": "uix:onigiri",
	});
}

export default Component;

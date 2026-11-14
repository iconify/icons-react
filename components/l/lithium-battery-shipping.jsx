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

.j1_-cacwc {
  d: path("M7.5 7h7a3.5 3.5 0 0 1 3.5 3.5v3a3.5 3.5 0 0 1-3.5 3.5h-7A3.5 3.5 0 0 1 4 13.5v-3A3.5 3.5 0 0 1 7.5 7M18 10v4");
}

.v_jv31vjr {
  d: path("M10 8.5L8 12h4l-2 3.5");
}
</style><g class="hntgybcog"><path class="j1_-cacwc"/><path class="v_jv31vjr"/></g>`,
		"fallback": "uix:lithium-battery-shipping",
	});
}

export default Component;

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

.mhobl8e_v {
  d: path("M8.5 5.75a3.5 2 0 1 0 7 0a3.5 2 0 1 0-7 0");
}

.q0mz0bimm {
  d: path("M10.5 7.5a6 3 0 1 0 3 0");
}

.tfsrfuvdq {
  d: path("M15 13a8.5 3.5 0 1 1-6 0");
}
</style><g class="hntgybcog"><path class="tfsrfuvdq"/><path class="q0mz0bimm"/><path class="mhobl8e_v"/></g>`,
		"fallback": "uix:smooth-stones",
	});
}

export default Component;

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

.ic_op6ycn {
  fill: currentColor;
  d: path("M5 4.5h.01");
}

.pzwachsfk {
  d: path("m5.194 10.176l7.362-4.25a1.75 1.75 0 0 1 2.39.641l.5.866a1.75 1.75 0 0 1-.64 2.391l-7.362 4.25a1.75 1.75 0 0 1-2.39-.641l-.5-.866a1.75 1.75 0 0 1 .64-2.391M10.5 12L6 21m4.5-9l4.5 9m4-19q0 2 2 2q-2 0-2 2q0-2-2-2q2 0 2-2");
}
</style><g class="hntgybcog"><path class="pzwachsfk"/><path class="ic_op6ycn"/></g>`,
		"fallback": "uix:pin-stargazing",
	});
}

export default Component;

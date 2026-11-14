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
		"content": `<style>.h4p-b3b4s {
  d: path("M2.5 15.5v-3A1.5 1.5 0 0 1 4 11l2.5-4.5h5L14 11a1.5 1.5 0 0 1 1.5 1.5v3Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o0hg0ebir {
  d: path("M3.5 17.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m7 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-3-11a1.5 1.5 0 0 1 3 0m7.25 4.75a3 3 0 0 1 0 3.5m3-5.25a6 6 0 0 1 0 7");
}
</style><g class="hntgybcog"><path class="h4p-b3b4s"/><path class="o0hg0ebir"/></g>`,
		"fallback": "uix:self-driving-car",
	});
}

export default Component;

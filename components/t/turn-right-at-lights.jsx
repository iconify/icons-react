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
		"content": `<style>.ati25bcor {
  d: path("M18.25 7.25L21 10l-2.75 2.75M6 2.5za3 3 0 0 1 3 3V12a3 3 0 0 1-3 3a3 3 0 0 1-3-3V5.5a3 3 0 0 1 3-3m0 3h.01M6 8.75h.01M6 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o0vz28bru {
  d: path("M13 21.5v-8a3.5 3.5 0 0 1 3.5-3.5H21");
}
</style><g class="hntgybcog"><path class="o0vz28bru"/><path class="ati25bcor"/></g>`,
		"fallback": "uix:turn-right-at-lights",
	});
}

export default Component;

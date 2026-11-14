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

.ngg3_2oja {
  d: path("M6 12a8 8 0 1 0 16 0a8 8 0 1 0-16 0m-3.5 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0M14 12h.01");
}

.smlgng2al {
  d: path("M4.5 19c0-8 2.5-14 7-14.75M9.5 3h3");
}
</style><g class="hntgybcog"><path class="ngg3_2oja"/><path class="smlgng2al"/></g>`,
		"fallback": "uix:penny-farthing",
	});
}

export default Component;

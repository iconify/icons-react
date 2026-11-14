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
		"content": `<style>.g-brwyb-v {
  d: path("M6.875 3.5h10.25A4.375 4.375 0 0 1 21.5 7.875v8.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 16.125v-8.25A4.375 4.375 0 0 1 6.875 3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q7b8ccbmt {
  d: path("M2.5 16c3.5-2.5 6.5 2.5 10 0s6 1 9-1m-12-3.25a2 2 0 0 1-.25-4a2.75 2.75 0 0 1 5 .5a1.75 1.75 0 0 1 .25 3.5Z");
}
</style><g class="hntgybcog"><path class="g-brwyb-v"/><path class="q7b8ccbmt"/></g>`,
		"fallback": "uix:mask-sky",
	});
}

export default Component;

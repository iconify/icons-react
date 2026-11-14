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
		"content": `<style>.e8tw6fbis {
  d: path("M3.5 12h2v7A2.5 2.5 0 0 0 8 21.5h8a2.5 2.5 0 0 0 2.5-2.5v-7h2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r-1cs3j3k {
  fill: currentColor;
  d: path("M11.5 2.5h1A1.5 1.5 0 0 1 14 4v12.5a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5V4a1.5 1.5 0 0 1 1.5-1.5");
}
</style><g class="hntgybcog"><path class="e8tw6fbis"/><path class="r-1cs3j3k"/></g>`,
		"fallback": "uix:litmus-blue",
	});
}

export default Component;

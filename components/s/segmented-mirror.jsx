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

.l3aknw9wn {
  d: path("m17.011 11.197l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618A1.5 1.5 0 0 1 12 17.392v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.otzh9hbzp {
  d: path("m12.761 3.697l2.75 1.618a1.5 1.5 0 0 1 .739 1.293v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293V6.608a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}

.q0yw5qbzn {
  d: path("m8.511 11.197l2.75 1.618A1.5 1.5 0 0 1 12 14.108v3.284a1.5 1.5 0 0 1-.739 1.293l-2.75 1.618a1.5 1.5 0 0 1-1.522 0l-2.75-1.618a1.5 1.5 0 0 1-.739-1.293v-3.284a1.5 1.5 0 0 1 .739-1.293l2.75-1.618a1.5 1.5 0 0 1 1.522 0");
}
</style><g class="hntgybcog"><path class="q0yw5qbzn"/><path class="l3aknw9wn"/><path class="otzh9hbzp"/></g>`,
		"fallback": "uix:segmented-mirror",
	});
}

export default Component;

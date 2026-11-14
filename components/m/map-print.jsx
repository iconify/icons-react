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
		"content": `<style>.c674zoe4n {
  d: path("m7.5 10.5l3-1l3 1l3-1v7l-3 1l-3-1l-3 1Zm3-1v7m3-6v7");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n2e4fo1cw {
  d: path("M6.5 2.5H14L19.5 8v11.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-15a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="n2e4fo1cw"/><path class="c674zoe4n"/></g>`,
		"fallback": "uix:map-print",
	});
}

export default Component;

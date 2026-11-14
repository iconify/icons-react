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
		"content": `<style>.ay-twhb9k {
  d: path("M6.25 15a2.75 2.75 0 0 1 5.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lx51vtv2t {
  d: path("M6.875 6h4.25a4.375 4.375 0 0 1 4.375 4.375v3.25A4.375 4.375 0 0 1 11.125 18h-4.25A4.375 4.375 0 0 1 2.5 13.625v-3.25A4.375 4.375 0 0 1 6.875 6");
}

.rg5glccva {
  d: path("m16.368 9.994l2.5-1.459a1.75 1.75 0 0 1 2.632 1.512v3.906a1.75 1.75 0 0 1-2.632 1.512l-2.5-1.459a1.75 1.75 0 0 1-.868-1.511v-.99a1.75 1.75 0 0 1 .868-1.511M7.25 10.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}
</style><g class="hntgybcog"><path class="lx51vtv2t"/><path class="rg5glccva"/><path class="ay-twhb9k"/></g>`,
		"fallback": "uix:video-interview",
	});
}

export default Component;

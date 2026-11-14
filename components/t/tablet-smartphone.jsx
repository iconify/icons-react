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

.n7hkpswso {
  d: path("M17.125 9.5h1.75a2.625 2.625 0 0 1 2.625 2.625v6.75a2.625 2.625 0 0 1-2.625 2.625h-1.75a2.625 2.625 0 0 1-2.625-2.625v-6.75A2.625 2.625 0 0 1 17.125 9.5M6 18h2.5m8.75.75h1.5");
}

.r7wtebb_b {
  d: path("M11.5 21.5H5A2.5 2.5 0 0 1 2.5 19V5A2.5 2.5 0 0 1 5 2.5h9A2.5 2.5 0 0 1 16.5 5v1.5");
}
</style><g class="hntgybcog"><path class="r7wtebb_b"/><path class="n7hkpswso"/></g>`,
		"fallback": "uix:tablet-smartphone",
	});
}

export default Component;

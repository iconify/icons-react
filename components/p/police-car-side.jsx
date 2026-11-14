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

.llwhyabfx {
  d: path("M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0M11.875 2.5h1.75a.875.875 0 0 1 .875.875a.875.875 0 0 1-.875.875h-1.75A.875.875 0 0 1 11 3.375a.875.875 0 0 1 .875-.875M5 14.75h14");
}

.nj2zg0b4t {
  d: path("M2.5 17.5v-4A1.5 1.5 0 0 1 4 12h2l2.75-4c.35-.6.95-1 1.75-1H15c.75 0 1.3.4 1.75 1L19 12h1a1.5 1.5 0 0 1 1.5 1.5v4Z");
}
</style><g class="hntgybcog"><path class="nj2zg0b4t"/><path class="llwhyabfx"/></g>`,
		"fallback": "uix:police-car-side",
	});
}

export default Component;

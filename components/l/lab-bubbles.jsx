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

.vkvq8fyeh {
  d: path("M4 3h1.5v15.5A2.5 2.5 0 0 0 8 21h8a2.5 2.5 0 0 0 2.5-2.5V3");
}

.w142sxbpy {
  d: path("M8.25 16.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0m4.25-5.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M11 6h.01");
}
</style><g class="hntgybcog"><path class="vkvq8fyeh"/><path class="w142sxbpy"/></g>`,
		"fallback": "uix:lab-bubbles",
	});
}

export default Component;

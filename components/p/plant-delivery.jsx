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
		"content": `<style>.g0n8-nvma {
  d: path("M2.5 16.5V7A1.5 1.5 0 0 1 4 5.5h11l6.5 5.5v5.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kdz7wybzw {
  d: path("M5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0-13V11h6.5M8.75 13.75v-2.5c-.25-1.75-1.5-3-3.5-3c0 1.75 1.5 3 3.5 3c.25-2 1.5-3 3.5-3c0 1.75-1.5 3-3.5 3");
}
</style><g class="hntgybcog"><path class="g0n8-nvma"/><path class="kdz7wybzw"/></g>`,
		"fallback": "uix:plant-delivery",
	});
}

export default Component;

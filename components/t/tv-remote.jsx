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

.poa2tubpa {
  d: path("M10 7a2 2 0 1 0 4 0a2 2 0 1 0-4 0m0 5.5h.01m3.99 0h.01M10 16h.01M14 16h.01");
}

.rj00bv36n {
  d: path("M11.375 2.5h1.25A4.375 4.375 0 0 1 17 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-1.25A4.375 4.375 0 0 1 7 17.125V6.875A4.375 4.375 0 0 1 11.375 2.5");
}
</style><g class="hntgybcog"><path class="rj00bv36n"/><path class="poa2tubpa"/></g>`,
		"fallback": "uix:tv-remote",
	});
}

export default Component;

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

.mf320p9is {
  d: path("M7.375 4.5h9.25A4.375 4.375 0 0 1 21 8.875v6.25a4.375 4.375 0 0 1-4.375 4.375h-9.25A4.375 4.375 0 0 1 3 15.125v-6.25A4.375 4.375 0 0 1 7.375 4.5");
}

.vaxemf0zs {
  d: path("M21 9.5h-4a2.5 2.5 0 0 0 0 5h4");
}
</style><g class="hntgybcog"><path class="mf320p9is"/><path class="vaxemf0zs"/></g>`,
		"fallback": "uix:wallet",
	});
}

export default Component;

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

.pa4f-4bjv {
  d: path("M6.75 8a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0M6 17.5L9.5 13l2 2.5L13 14");
}

.pnfjgebbv {
  d: path("M17 2.5H4.5a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2H17m2.228-17.762l1.5.833a1.5 1.5 0 0 1 .772 1.312v12.234a1.5 1.5 0 0 1-.772 1.312l-1.5.833A1.5 1.5 0 0 1 17 18.951V5.049a1.5 1.5 0 0 1 2.228-1.311");
}
</style><g class="hntgybcog"><path class="pnfjgebbv"/><path class="pa4f-4bjv"/></g>`,
		"fallback": "uix:poster-snap-frame",
	});
}

export default Component;

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

.oeq7b1bgx {
  d: path("M9.5 12.5L12 15l2.5-2.5m-5 2.5h5a1.75 1.75 0 0 1 1.75 1.75v2a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75v-2A1.75 1.75 0 0 1 9.5 15m1 2.75h3");
}

.y-igi7bcv {
  d: path("M8.75 5.5a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m-5.25 16V19c0-4.5 3.5-7 8.5-7s8.5 2.5 8.5 7v2.5");
}
</style><g class="hntgybcog"><path class="y-igi7bcv"/><path class="oeq7b1bgx"/></g>`,
		"fallback": "uix:press-accreditation",
	});
}

export default Component;

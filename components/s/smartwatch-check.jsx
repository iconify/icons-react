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
		"content": `<style>.c87_qgboq {
  d: path("M11.25 6h1.5A5.25 5.25 0 0 1 18 11.25v1.5A5.25 5.25 0 0 1 12.75 18h-1.5A5.25 5.25 0 0 1 6 12.75v-1.5A5.25 5.25 0 0 1 11.25 6M8.5 6L9 3h6l.5 3m-7 12l.5 3h6l.5-3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ju-p_fbgs {
  d: path("m9.5 12l1.75 1.75l3.25-3.25");
}
</style><g class="hntgybcog"><path class="c87_qgboq"/><path class="ju-p_fbgs"/></g>`,
		"fallback": "uix:smartwatch-check",
	});
}

export default Component;

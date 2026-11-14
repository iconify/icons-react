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

.xm2fp6bme {
  d: path("M6.5 12a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0M2 12h4.5m11 0H22");
}

.xtgkg3b0k {
  d: path("m9.5 12l1.75 1.75l3.25-3.5");
}
</style><g class="hntgybcog"><path class="xm2fp6bme"/><path class="xtgkg3b0k"/></g>`,
		"fallback": "uix:pre-commit",
	});
}

export default Component;

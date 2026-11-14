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

.mw3g3kvga {
  d: path("m13.5 13l3 3l3-3");
}

.v7yd27b-i {
  d: path("M6.5 20V10a5 5 0 0 1 10 0v6");
}
</style><g class="hntgybcog"><path class="v7yd27b-i"/><path class="mw3g3kvga"/></g>`,
		"fallback": "uix:u-turn-right",
	});
}

export default Component;

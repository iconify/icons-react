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

.pseu05ulv {
  d: path("M7.5 12a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0m4.5 0h.01");
}

.r2goqtb8d {
  d: path("M16.5 4.25a9 9 0 1 1-9 0m-3-.75l3 .75l-.75 3");
}
</style><g class="hntgybcog"><path class="r2goqtb8d"/><path class="pseu05ulv"/></g>`,
		"fallback": "uix:okr-cycle",
	});
}

export default Component;

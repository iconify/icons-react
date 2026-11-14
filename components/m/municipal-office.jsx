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
		"content": `<style>.hj4bwreqj {
  d: path("M8.75 7H9a1.5 1.5 0 0 1 1.5 1.5V9A1.5 1.5 0 0 1 9 10.5h-.25A1.5 1.5 0 0 1 7.25 9v-.5A1.5 1.5 0 0 1 8.75 7M15 7h.25a1.5 1.5 0 0 1 1.5 1.5V9a1.5 1.5 0 0 1-1.5 1.5H15A1.5 1.5 0 0 1 13.5 9v-.5A1.5 1.5 0 0 1 15 7M9.5 21.5V15h5v6.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.r3z06k2_s {
  d: path("M2.5 3.5h19m-17 0v18h15v-18");
}
</style><g class="hntgybcog"><path class="r3z06k2_s"/><path class="hj4bwreqj"/></g>`,
		"fallback": "uix:municipal-office",
	});
}

export default Component;

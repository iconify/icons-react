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
		"content": `<style>.gewrp-wao {
  d: path("M12 5.65A4.5 4.5 0 0 1 18.35 12a4.5 4.5 0 0 0-5.29-1.06A4.5 4.5 0 0 0 12 5.65m0 12.7A4.5 4.5 0 0 1 5.65 12a4.5 4.5 0 0 0 5.29 1.06A4.5 4.5 0 0 0 12 18.35");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ql8cb2b_p {
  d: path("M10.94 13.06a4.5 4.5 0 1 1 2.12-2.12a4.5 4.5 0 1 1-2.12 2.12");
}
</style><g class="hntgybcog"><path class="gewrp-wao"/><path class="ql8cb2b_p"/></g>`,
		"fallback": "iconoven:nucleus",
	});
}

export default Component;

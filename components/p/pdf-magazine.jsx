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

.pduwc_p4l {
  d: path("M8.375 2.5h7.25A4.375 4.375 0 0 1 20 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-7.25A4.375 4.375 0 0 1 4 17.125V6.875A4.375 4.375 0 0 1 8.375 2.5M8 6.5h8");
}

.xvi3q4bhx {
  d: path("M9.75 9.5h4.5A1.75 1.75 0 0 1 16 11.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 13.75v-2.5A1.75 1.75 0 0 1 9.75 9.5m2.25 9h.01");
}
</style><g class="hntgybcog"><path class="pduwc_p4l"/><path class="xvi3q4bhx"/></g>`,
		"fallback": "uix:pdf-magazine",
	});
}

export default Component;

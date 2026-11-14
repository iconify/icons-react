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

.ow_mg0g_c {
  d: path("m15.5 12l1 1l2-2m-3 7.25l1 1l2-2");
}

.za3mp0n7x {
  d: path("M7 2.5h10A3.5 3.5 0 0 1 20.5 6v12a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18V6A3.5 3.5 0 0 1 7 2.5m6.5 0v19M3.5 9h17m-17 6h17M6 5.75h5M6 12h5m-5 6.25h5");
}
</style><g class="hntgybcog"><path class="za3mp0n7x"/><path class="ow_mg0g_c"/></g>`,
		"fallback": "uix:interview-scorecard",
	});
}

export default Component;

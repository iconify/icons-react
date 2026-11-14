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

.vd40_ubmr {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5M12 5.25h.01");
}

.y4k_d_x3o {
  d: path("M10 10.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0M8.25 18.5c0-2 1.75-3 3.75-3s3.75 1 3.75 3");
}
</style><g class="hntgybcog"><path class="vd40_ubmr"/><path class="y4k_d_x3o"/></g>`,
		"fallback": "uix:selfie",
	});
}

export default Component;

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

.r3l0apq1o {
  d: path("M10.316 18.5h3.368a1.5 1.5 0 0 0 1.473-1.783L13.189 6.482A1.21 1.21 0 0 0 12 5.5a1.21 1.21 0 0 0-1.189.982L8.843 16.717a1.5 1.5 0 0 0 1.473 1.783m1.684-3l3.5-7");
}

.rfenysb5q {
  d: path("M9.875 2.5h4.25A4.375 4.375 0 0 1 18.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 5.5 17.125V6.875A4.375 4.375 0 0 1 9.875 2.5");
}
</style><g class="hntgybcog"><path class="rfenysb5q"/><path class="r3l0apq1o"/></g>`,
		"fallback": "uix:metronome-app",
	});
}

export default Component;

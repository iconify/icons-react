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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwociqd3g {
  d: path("M15.5 5.938a7 7 0 0 1 0 12.124m-5.312.699a7 7 0 0 1-4.532-3.803m0-5.916a7 7 0 0 1 4.532-3.803M9.75 9.75a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0");
}

.sbkq1bcle {
  d: path("M7.75 17.25c0-2 2-2.75 4.25-2.75s4.25.75 4.25 2.75");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="iwociqd3g"/><path class="sbkq1bcle"/></g>`,
		"fallback": "uix:mask-background",
	});
}

export default Component;

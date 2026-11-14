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

.eo22r1-sc {
  d: path("M8.125 7h7.75A2.625 2.625 0 0 1 18.5 9.625v4.75A2.625 2.625 0 0 1 15.875 17h-7.75A2.625 2.625 0 0 1 5.5 14.375v-4.75A2.625 2.625 0 0 1 8.125 7m.375 3.5h7m-3 3.25h3");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="eo22r1-sc"/></g>`,
		"fallback": "uix:modal",
	});
}

export default Component;

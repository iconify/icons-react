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
		"content": `<style>.fvmyi6z3s {
  d: path("M4.25 12a7.75 9.75 0 1 0 15.5 0a7.75 9.75 0 1 0-15.5 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wnws9nbfe {
  d: path("M10.5 10.5q-2.5 0-5.25-3.25m8.25 3.25q2.5 0 5.25-3.25m-9 8.25Q7.5 15 4.5 12.75m9.75 2.75q2.25-.5 5.25-2.75");
}
</style><g class="hntgybcog"><path class="fvmyi6z3s"/><path class="wnws9nbfe"/></g>`,
		"fallback": "uix:kabuki-face",
	});
}

export default Component;

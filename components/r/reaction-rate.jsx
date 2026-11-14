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

.i8u9g0uke {
  d: path("M10.5 16a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m2.75-1.25l3.5-3.5M12 7v2.5");
}

.ng35sb6yg {
  d: path("M3 16a9 9 0 0 1 18 0");
}
</style><g class="hntgybcog"><path class="ng35sb6yg"/><path class="i8u9g0uke"/></g>`,
		"fallback": "uix:reaction-rate",
	});
}

export default Component;

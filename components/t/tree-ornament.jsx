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

.ld8t3xlch {
  fill: currentColor;
  d: path("M10.25 13.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.wa2usbbsr {
  d: path("m13.262 4.463l2.697 4.196a.546.546 0 0 1-.459.841a.554.554 0 0 0-.47.848l3.036 4.857a1.5 1.5 0 0 1-1.272 2.295H7.206a1.5 1.5 0 0 1-1.272-2.295l3.036-4.857A.554.554 0 0 0 8.5 9.5a.546.546 0 0 1-.459-.841l2.697-4.196a1.5 1.5 0 0 1 2.524 0M12 17.5v4");
}
</style><g class="hntgybcog"><path class="wa2usbbsr"/><path class="ld8t3xlch"/></g>`,
		"fallback": "uix:tree-ornament",
	});
}

export default Component;

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

.l_--bg86l {
  d: path("M7.75 11.5h8.5A4.75 4.75 0 0 1 21 16.25A4.75 4.75 0 0 1 16.25 21h-8.5A4.75 4.75 0 0 1 3 16.25a4.75 4.75 0 0 1 4.75-4.75m-5.25-5h9m4-4v9m-2-9h4");
}

.nzrn7sb2l {
  d: path("M5.5 16q3-1.5 6 0c2 1 4 1 7 0");
}
</style><g class="hntgybcog"><path class="l_--bg86l"/><path class="nzrn7sb2l"/></g>`,
		"fallback": "uix:septic-tank",
	});
}

export default Component;

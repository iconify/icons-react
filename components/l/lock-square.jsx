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

.kebju1mox {
  d: path("M7.375 3h9.25A4.375 4.375 0 0 1 21 7.375v9.25A4.375 4.375 0 0 1 16.625 21h-9.25A4.375 4.375 0 0 1 3 16.625v-9.25A4.375 4.375 0 0 1 7.375 3");
}

.x_y45acnz {
  d: path("M9.75 11.5h4.5A1.75 1.75 0 0 1 16 13.25v2.5a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 15.75v-2.5a1.75 1.75 0 0 1 1.75-1.75m0 0V10a2.25 2.25 0 0 1 4.5 0v1.5");
}
</style><g class="hntgybcog"><path class="kebju1mox"/><path class="x_y45acnz"/></g>`,
		"fallback": "uix:lock-square",
	});
}

export default Component;

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

.igexu-ghp {
  d: path("M8.5 8h1q1.25 0 1.25 1.25v2.25q0 1.25-1.25 1.25h-1q-1.25 0-1.25-1.25V9.25Q7.25 8 8.5 8m6 0h1q1.25 0 1.25 1.25v2.25q0 1.25-1.25 1.25h-1q-1.25 0-1.25-1.25V9.25Q13.25 8 14.5 8m-9.75.75h-2m16.5 0h2M4.75 11.5h-2m16.5 0h2");
}

.os_rzbcse {
  d: path("M7 5.5h10a2.25 2.25 0 0 1 2.25 2.25v4.5a3 3 0 0 1-3 3h-1.5l-.95 2.55a1.5 1.5 0 0 1-1.4.95h-.8a1.5 1.5 0 0 1-1.4-.95l-.95-2.55h-1.5a3 3 0 0 1-3-3v-4.5A2.25 2.25 0 0 1 7 5.5");
}
</style><g class="hntgybcog"><path class="os_rzbcse"/><path class="igexu-ghp"/></g>`,
		"fallback": "iconoven:scuba-mask",
	});
}

export default Component;

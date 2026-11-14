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

.vx-tqnray {
  d: path("M9 6.5h6a3.5 3.5 0 0 1 3.5 3.5v8a3.5 3.5 0 0 1-3.5 3.5H9A3.5 3.5 0 0 1 5.5 18v-8A3.5 3.5 0 0 1 9 6.5m-.75-4h7.5a1.75 1.75 0 0 1 1.75 1.75v.5a1.75 1.75 0 0 1-1.75 1.75h-7.5A1.75 1.75 0 0 1 6.5 4.75v-.5A1.75 1.75 0 0 1 8.25 2.5");
}

.zjl_1_bbc {
  d: path("M8.5 19.5V11h2.75c1.25 0 2.25 1 2.25 2.25c0 1-1 2-2.25 2H8.5m2.75 0l4.25 4.5m0-4l-3.25 4");
}
</style><g class="hntgybcog"><path class="vx-tqnray"/><path class="zjl_1_bbc"/></g>`,
		"fallback": "uix:prescription",
	});
}

export default Component;

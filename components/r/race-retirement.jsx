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

.nnaeqrbhs {
  d: path("M4.5 18.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m10 0a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m-11-6.75C2.25 10 4.75 8 3.5 6C2.75 4.75 3 3.5 4 2.5M7 10C5.5 8 8.5 6 7 3.75");
}

.yg0tb1dba {
  d: path("M4.5 18.5h-2v-3l5.5-2l2.5-2.75h4l3 2.75l4 1v4h-2m-10 0h5");
}
</style><g class="hntgybcog"><path class="yg0tb1dba"/><path class="nnaeqrbhs"/></g>`,
		"fallback": "uix:race-retirement",
	});
}

export default Component;

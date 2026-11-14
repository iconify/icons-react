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
		"content": `<style>.gutm8acqz {
  d: path("M2.5 12a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}

.h4_m2nb8f {
  d: path("M5.5 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10-5h6m-6 5h4m-4 5H18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gutm8acqz"/><path class="h4_m2nb8f"/></g>`,
		"fallback": "uix:okr",
	});
}

export default Component;

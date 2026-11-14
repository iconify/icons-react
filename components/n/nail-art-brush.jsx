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
		"content": `<style>.er2os_rji {
  d: path("m11.895 8.4l1.933-1.289a.765.765 0 0 1 1.061 1.061L13.6 10.105a1.23 1.23 0 0 1-1.893.188a1.23 1.23 0 0 1 .188-1.893m6.605.1s2 2.5 2 3.5a2 2 0 0 1-4 0c0-1 2-3.5 2-3.5");
}

.h87jhpy4m {
  d: path("M11.707 10.293za1.5 1.5 0 0 1 0 2.121L6.05 18.071a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l5.657-5.657a1.5 1.5 0 0 1 2.121 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h87jhpy4m"/><path class="er2os_rji"/></g>`,
		"fallback": "uix:nail-art-brush",
	});
}

export default Component;

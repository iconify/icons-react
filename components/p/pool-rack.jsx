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

.ojxo4n94s {
  d: path("M7.04 19.5h9.92a2.625 2.625 0 0 0 2.275-3.935l-4.96-8.614a2.625 2.625 0 0 0-4.55 0l-4.96 8.614A2.625 2.625 0 0 0 7.04 19.5");
}

.w54u42bbs {
  d: path("M7.75 15.25a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M10.5 10.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="ojxo4n94s"/><path class="w54u42bbs"/></g>`,
		"fallback": "uix:pool-rack",
	});
}

export default Component;

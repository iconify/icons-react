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

.hs4ne2wsc {
  d: path("M11 6L8 9l3 3M4 5v8");
}

.xj7nnm-0n {
  d: path("M20 19v-5a5 5 0 0 0-5-5H8");
}
</style><g class="hntgybcog"><path class="xj7nnm-0n"/><path class="hs4ne2wsc"/></g>`,
		"fallback": "uix:revert",
	});
}

export default Component;

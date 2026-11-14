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

.ryb47vbyp {
  d: path("M6 6h11.5a2.5 6 0 0 1 0 12H6m6.5-12v12");
}

.ysxclmd-n {
  d: path("M3.5 12a2.5 6 0 1 0 5 0a2.5 6 0 1 0-5 0");
}
</style><g class="hntgybcog"><path class="ysxclmd-n"/><path class="ryb47vbyp"/></g>`,
		"fallback": "uix:newspaper-rolled",
	});
}

export default Component;

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

.xso5oab7y {
  d: path("m10.783 2.891l5.25 2.625A1.75 1.75 0 0 1 17 7.082v4.336a1.75 1.75 0 0 1-.967 1.566l-5.25 2.625a1.75 1.75 0 0 1-1.566 0l-5.25-2.625A1.75 1.75 0 0 1 3 11.418V7.082a1.75 1.75 0 0 1 .967-1.566l5.25-2.625a1.75 1.75 0 0 1 1.566 0");
}

.yrsggbi8d {
  d: path("m3 6l7 3.5L17 6m-7 3.5V16M6.5 4.25l7 3.5M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><g class="hntgybcog"><path class="xso5oab7y"/><path class="yrsggbi8d"/></g>`,
		"fallback": "uix:package-publish",
	});
}

export default Component;

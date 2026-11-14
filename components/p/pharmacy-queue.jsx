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

.teru8hosf {
  d: path("M7.5 2.5h9a2 2 0 0 1 2 2V14a2 2 0 0 0 0 4v1.5a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2V18a2 2 0 0 0 0-4V4.5a2 2 0 0 1 2-2");
}

.u4mi32bzh {
  d: path("m10 7.25l2.5-1.75v7M10.25 16h3.5");
}
</style><g class="hntgybcog"><path class="teru8hosf"/><path class="u4mi32bzh"/></g>`,
		"fallback": "uix:pharmacy-queue",
	});
}

export default Component;

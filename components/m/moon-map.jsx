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

.hz5znyb1u {
  d: path("M15 7.75a5 5 0 1 0 0 8.5a5 5 0 0 1 0-8.5m-4.5 2.75h.01m-.01 3h.01");
}

.mey21abvb {
  d: path("m3 5l6-2l6 2l6-2v16l-6 2l-6-2l-6 2Z");
}
</style><g class="hntgybcog"><path class="mey21abvb"/><path class="hz5znyb1u"/></g>`,
		"fallback": "uix:moon-map",
	});
}

export default Component;

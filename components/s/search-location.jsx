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
		"content": `<style>.aurc8q0mo {
  d: path("M10.5 14s-2.75-2.25-2.75-4.25a2.75 2.75 0 0 1 5.5 0c0 2-2.75 4.25-2.75 4.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.polw-1gzh {
  d: path("M3.5 10.5a7 7 0 1 0 14 0a7 7 0 1 0-14 0m12 5l5 5");
}
</style><g class="hntgybcog"><path class="polw-1gzh"/><path class="aurc8q0mo"/></g>`,
		"fallback": "uix:search-location",
	});
}

export default Component;

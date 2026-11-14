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

.ifjzdr82d {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0M7 9.5h10");
}

.rhg2tshdt {
  d: path("M14.5 7L17 9.5L14.5 12m2.5 2.5H7M9.5 12L7 14.5L9.5 17");
}
</style><g class="hntgybcog"><path class="ifjzdr82d"/><path class="rhg2tshdt"/></g>`,
		"fallback": "uix:swap-circle",
	});
}

export default Component;

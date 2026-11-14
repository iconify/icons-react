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
		"content": `<style>.c-xv40bvx {
  d: path("M4 20q7-7.5 13-13.5");
}

.h81-mpbzc {
  d: path("M4 20c2-9 7.5-15 16-16.5c-2.5 7-8 13-16 16.5m0 0l-1.25 1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="h81-mpbzc"/><path class="c-xv40bvx"/></g>`,
		"fallback": "uix:leaf-willow",
	});
}

export default Component;

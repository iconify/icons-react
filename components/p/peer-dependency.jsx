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
		"content": `<style>.aoe62081b {
  d: path("m7.171 3.835l2.5 1.25a1.5 1.5 0 0 1 .829 1.342v3.146a1.5 1.5 0 0 1-.829 1.342l-2.5 1.25a1.5 1.5 0 0 1-1.342 0l-2.5-1.25A1.5 1.5 0 0 1 2.5 9.573V6.427a1.5 1.5 0 0 1 .829-1.342l2.5-1.25a1.5 1.5 0 0 1 1.342 0m11 8l2.5 1.25a1.5 1.5 0 0 1 .829 1.342v3.146a1.5 1.5 0 0 1-.829 1.342l-2.5 1.25a1.5 1.5 0 0 1-1.342 0l-2.5-1.25a1.5 1.5 0 0 1-.829-1.342v-3.146a1.5 1.5 0 0 1 .829-1.342l2.5-1.25a1.5 1.5 0 0 1 1.342 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lcl_8gbre {
  d: path("m2.5 5.5l4 2l4-2m-4 2v5m7 1l4 2l4-2m-4 2v5m-7-11l3 5");
}
</style><g class="hntgybcog"><path class="aoe62081b"/><path class="lcl_8gbre"/></g>`,
		"fallback": "uix:peer-dependency",
	});
}

export default Component;

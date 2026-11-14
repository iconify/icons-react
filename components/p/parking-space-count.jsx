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
		"content": `<style>.dfryx5b8t {
  d: path("M6 3h12a3.5 3.5 0 0 1 3.5 3.5v6A3.5 3.5 0 0 1 18 16H6a3.5 3.5 0 0 1-3.5-3.5v-6A3.5 3.5 0 0 1 6 3m6 13v5.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ngr8pmbps {
  d: path("M6 13V6h2a2 2 0 0 1 0 4H6m7-3.5V13m2.5-5.25a1.75 1.75 0 0 1 3.5 0c0 2-3.5 3-3.5 5.25H19");
}
</style><g class="hntgybcog"><path class="dfryx5b8t"/><path class="ngr8pmbps"/></g>`,
		"fallback": "uix:parking-space-count",
	});
}

export default Component;

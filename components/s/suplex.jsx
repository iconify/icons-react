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

.lmgrrfrdk {
  d: path("M5 19.5C5 1 19 1 19 16.5");
}

.r03jqjb-r {
  d: path("m16.5 14l2.5 2.5l2.5-2.5m-19 5.5h19");
}
</style><g class="hntgybcog"><path class="lmgrrfrdk"/><path class="r03jqjb-r"/></g>`,
		"fallback": "uix:suplex",
	});
}

export default Component;

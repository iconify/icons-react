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

.iw49jcbqb {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0");
}

.yq0v3zf8t {
  d: path("M15 18.5v-4a2.5 2.5 0 0 0-2.5-2.5H5m1.5-1.5L5 12l1.5 1.5M5.25 5.25l13.5 13.5");
}
</style><g class="hntgybcog"><path class="iw49jcbqb"/><path class="yq0v3zf8t"/></g>`,
		"fallback": "uix:no-left-turn",
	});
}

export default Component;

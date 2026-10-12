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

.kvz5volay {
  d: path("M2.75 12a9.25 3.25 0 1 0 18.5 0a9.25 3.25 0 1 0-18.5 0");
}

.t0go0dbaf {
  d: path("M7.5 9.16a4.5 4.5 0 0 1 9 0a9.25 3.25 0 0 0-9 0m1 9.09l-1 3m4.5-3v3m3.5-3l1 3");
}
</style><g class="hntgybcog"><path class="kvz5volay"/><path class="t0go0dbaf"/></g>`,
		"fallback": "iconoven:ufo",
	});
}

export default Component;

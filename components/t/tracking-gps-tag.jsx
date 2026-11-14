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

.mkf-qqbjz {
  d: path("M9.5 10a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m2.5 2.5v2m0 3h.01");
}

.wkfk-pb1y {
  d: path("M10.25 3.5h3.5A5.25 5.25 0 0 1 19 8.75v6.5a5.25 5.25 0 0 1-5.25 5.25h-3.5A5.25 5.25 0 0 1 5 15.25v-6.5a5.25 5.25 0 0 1 5.25-5.25");
}
</style><g class="hntgybcog"><path class="wkfk-pb1y"/><path class="mkf-qqbjz"/></g>`,
		"fallback": "uix:tracking-gps-tag",
	});
}

export default Component;

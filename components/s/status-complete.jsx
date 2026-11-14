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

.wbucrcioa {
  d: path("M21.25 9.5a9.5 9.5 0 1 1-6.75-6.75");
}

.wc-4ox-yl {
  d: path("m7 11l4 4l7.5-7.5");
}
</style><g class="hntgybcog"><path class="wbucrcioa"/><path class="wc-4ox-yl"/></g>`,
		"fallback": "uix:status-complete",
	});
}

export default Component;

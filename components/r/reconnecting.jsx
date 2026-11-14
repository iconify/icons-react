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
		"content": `<style>.dtl0tql6h {
  d: path("M14.25 16.75L12 19l2.25 2.25M8.5 18.062A7 7 0 0 1 12 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qv7f55bnr {
  d: path("M9.75 2.75L12 5L9.75 7.25");
}

.rf2o4ub-c {
  fill: currentColor;
  d: path("M10.25 12a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0");
}

.w3qkizbkc {
  d: path("M15.5 5.938A7 7 0 0 1 12 19");
}
</style><g class="hntgybcog"><path class="w3qkizbkc"/><path class="dtl0tql6h"/><path class="qv7f55bnr"/><path class="rf2o4ub-c"/></g>`,
		"fallback": "uix:reconnecting",
	});
}

export default Component;

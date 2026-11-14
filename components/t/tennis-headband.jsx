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

.n1h0qsbtw {
  d: path("M5.5 9a6.5 6.5 0 1 0 13 0a6.5 6.5 0 1 0-13 0m-1 12.5c0-2 3.25-3.25 7.5-3.25s7.5 1.25 7.5 3.25");
}

.xlgoald2i {
  d: path("M6.5 5.5q5.5 2 11 0m-12 3q6.5 2 13 0");
}
</style><g class="hntgybcog"><path class="n1h0qsbtw"/><path class="xlgoald2i"/></g>`,
		"fallback": "uix:tennis-headband",
	});
}

export default Component;

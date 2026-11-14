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

.ll515abex {
  d: path("M8 9a1.25 1.25 0 1 0 2.5 0A1.25 1.25 0 1 0 8 9m5.5 5.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.r9qq_gzjh {
  d: path("m12 2.75l7.5 2.75v6c0 4.7-3.1 8-7.5 9.75c-4.4-1.75-7.5-5.05-7.5-9.75v-6Zm2.75 5.5l-5.5 7");
}
</style><g class="hntgybcog"><path class="r9qq_gzjh"/><path class="ll515abex"/></g>`,
		"fallback": "uix:test-coverage",
	});
}

export default Component;

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
		"content": `<style>.c4_rwebai {
  d: path("M4 9h13v2.5a5.5 5.5 0 0 1-5.5 5.5h-2A5.5 5.5 0 0 1 4 11.5Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iv_sd6d1c {
  d: path("M17 10h1a2.25 2.25 0 0 1 0 4.5h-1.75M2.5 19.75h18M7 9a3.5 3.5 0 0 1 7 0m-3.5 0V5.5");
}
</style><g class="hntgybcog"><path class="c4_rwebai"/><path class="iv_sd6d1c"/></g>`,
		"fallback": "uix:lemon-tea",
	});
}

export default Component;

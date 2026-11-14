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

.sgluembcc {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m5-3.25H10m4 0h2.5");
}

.tkyj020qm {
  d: path("M8.75 11.5S7.25 13 7.25 14a1.5 1.5 0 0 0 3 0c0-1-1.5-2.5-1.5-2.5m6.5 0s-1.5 1.5-1.5 2.5a1.5 1.5 0 0 0 3 0c0-1-1.5-2.5-1.5-2.5M10 18.25q2-1.75 4 0");
}
</style><g class="hntgybcog"><path class="sgluembcc"/><path class="tkyj020qm"/></g>`,
		"fallback": "uix:mood-tearful",
	});
}

export default Component;

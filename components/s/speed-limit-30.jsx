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

.oi8ql9esw {
  d: path("M6 9.75A2.25 2.25 0 1 1 8.25 12A2.25 2.25 0 1 1 6 14.25M13.25 12a2.25 4.5 0 1 0 4.5 0a2.25 4.5 0 1 0-4.5 0");
}

.oy9aotbsd {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0");
}
</style><g class="hntgybcog"><path class="oy9aotbsd"/><path class="oi8ql9esw"/></g>`,
		"fallback": "uix:speed-limit-30",
	});
}

export default Component;

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
		"content": `<style>.fmm9brb0c {
  d: path("M4 7.5v12l2.25-1l2.25 1l2.25-1l.926.412M13 12.649V10M7.5 7.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m7 7.5H16c0 1.25.75 1.75 2 1.75s2-.5 2-1.75h1.5v6.5h-7Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.odzfh9bqu {
  d: path("M4 7.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="odzfh9bqu"/><path class="fmm9brb0c"/></g>`,
		"fallback": "uix:plastic-bag-roll",
	});
}

export default Component;

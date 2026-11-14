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
		"content": `<style>.ben_xoqbo {
  d: path("M11 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uaqdvgble {
  d: path("M3 16a9 9 0 0 1 18 0m-9 0l4.5-6");
}
</style><g class="hntgybcog"><path class="uaqdvgble"/><path class="ben_xoqbo"/></g>`,
		"fallback": "uix:keyword-difficulty",
	});
}

export default Component;

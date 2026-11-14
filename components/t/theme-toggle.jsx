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
		"content": `<style>.dsvzlvb9u {
  d: path("M17.25 9a3.25 3.25 0 1 0 1.5 5a2.75 2.75 0 0 1-1.5-5M8.5 12h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jq91eijwj {
  d: path("M8.5 6h7a6 6 0 0 1 6 6a6 6 0 0 1-6 6h-7a6 6 0 0 1-6-6a6 6 0 0 1 6-6");
}
</style><g class="hntgybcog"><path class="jq91eijwj"/><path class="dsvzlvb9u"/></g>`,
		"fallback": "uix:theme-toggle",
	});
}

export default Component;

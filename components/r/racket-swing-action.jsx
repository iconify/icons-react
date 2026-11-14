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

.k4mwhczgm {
  d: path("M7.75 9a4.5 6.25 0 1 0 9 0a4.5 6.25 0 1 0-9 0m2.129 5.475l-6.188 6.187");
}

.tovuih4je {
  d: path("M6.25 10.25a8 8 0 0 1 4-7");
}
</style><g class="hntgybcog"><path class="k4mwhczgm"/><path class="tovuih4je"/></g>`,
		"fallback": "uix:racket-swing-action",
	});
}

export default Component;

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
		"content": `<style>.cs8_1bcpy {
  d: path("M8.5 11.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4-rr57vq {
  d: path("M7 3c1.5 1 3.5 1 5-.5C13.5 4 15.5 4 17 3l2.5 2.5q-1.125 2.25 0 4.5c0 5-3 9-7.5 11.5C7.5 19 4.5 15 4.5 10q1.125-2.25 0-4.5Z");
}
</style><g class="hntgybcog"><path class="x4-rr57vq"/><path class="cs8_1bcpy"/></g>`,
		"fallback": "uix:police-badge",
	});
}

export default Component;

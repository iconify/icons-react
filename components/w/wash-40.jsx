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
		"content": `<style>.drn9fsz1q {
  d: path("M8 12.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0m5.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0");
}

.gepfux8ew {
  d: path("M3 7q2.25-2 4.5 0T12 7t4.5 0T21 7l-2.25 11.5H5.25Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="gepfux8ew"/><path class="drn9fsz1q"/></g>`,
		"fallback": "uix:wash-40",
	});
}

export default Component;

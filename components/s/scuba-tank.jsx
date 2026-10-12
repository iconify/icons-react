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
		"content": `<style>.b35c6vbgg {
  width: 8px;
  height: 14.25px;
  x: 8px;
  y: 7px;
  rx: 3.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m0sztr06d {
  d: path("M8 11h8m-8 6.25h8M10.75 7V4.25h2.5V7Zm2.5-2.25h3.25A2.25 2.25 0 0 1 18.75 7v3");
}
</style><g class="hntgybcog"><rect class="b35c6vbgg"/><path class="m0sztr06d"/></g>`,
		"fallback": "iconoven:scuba-tank",
	});
}

export default Component;

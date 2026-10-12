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

.rkqugabqk {
  d: path("M8 8a5.25 5.25 0 0 1 10.5 0A1.25 1.25 0 0 1 16 8a2.75 2.75 0 0 0-5.5 0A1.25 1.25 0 0 1 8 8m1.25 1.25v9.25");
}

.z8xjjvbbk {
  width: 3px;
  height: 2.75px;
  x: 7.75px;
  y: 18.5px;
  rx: 1px;
}
</style><g class="hntgybcog"><path class="rkqugabqk"/><rect class="z8xjjvbbk"/></g>`,
		"fallback": "iconoven:walking-cane",
	});
}

export default Component;

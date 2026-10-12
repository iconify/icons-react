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
		"content": `<style>.b-d23fhvr {
  d: path("M4.75 7.75h9m-9 2.75h9m-4.5 3V16m4.5-7.5h3.5v12.75m-4.5 0h8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wlmc0cksb {
  width: 9px;
  height: 10.75px;
  x: 4.75px;
  y: 2.75px;
  rx: 4.5px;
}
</style><g class="hntgybcog"><rect class="wlmc0cksb"/><path class="b-d23fhvr"/></g>`,
		"fallback": "iconoven:podcast-mic",
	});
}

export default Component;

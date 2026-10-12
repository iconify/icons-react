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

.neks5ib7s {
  cx: 18.25px;
  cy: 19px;
  r: 1.75px;
}

.ognf-3b5r {
  d: path("M10.25 16.02a6.75 6.75 0 1 1 3.5 0v3.73a1.5 1.5 0 0 1-1.5 1.5h-.5a1.5 1.5 0 0 1-1.5-1.5Z");
}
</style><g class="hntgybcog"><path class="ognf-3b5r"/><circle class="neks5ib7s"/></g>`,
		"fallback": "iconoven:ping-pong",
	});
}

export default Component;

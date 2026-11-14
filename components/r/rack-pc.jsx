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
		"content": `<style>.uavbiac2o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 2.5h9A3.5 3.5 0 0 1 20 6v12a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 18V6a3.5 3.5 0 0 1 3.5-3.5M4 8.75h16M4 15h16M7.5 5.75h.01m-.01 6h.01m-.01 6.5h.01");
}
</style><path class="uavbiac2o"/>`,
		"fallback": "uix:rack-pc",
	});
}

export default Component;

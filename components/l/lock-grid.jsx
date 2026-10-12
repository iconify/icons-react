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
		"content": `<style>.harne1byn {
  width: 14.5px;
  height: 10.5px;
  x: 4.75px;
  y: 10.75px;
  rx: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qeudbmb6i {
  d: path("M7.75 10.75V7.5a4.25 4.25 0 0 1 8.5 0v3.25m-4.25 4v2.5");
}
</style><g class="hntgybcog"><rect class="harne1byn"/><path class="qeudbmb6i"/></g>`,
		"fallback": "iconoven:lock-grid",
	});
}

export default Component;

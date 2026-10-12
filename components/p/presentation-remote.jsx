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
		"content": `<style>.djrfyyy1p {
  width: 9.5px;
  height: 14px;
  x: 7.25px;
  y: 7.25px;
  rx: 3px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k8574nm4j {
  d: path("M9.75 12.25L12 10l2.25 2.25m-4.5 4L12 18.5l2.25-2.25m-5-12a4 4 0 0 1 5.5 0");
}
</style><g class="hntgybcog"><rect class="djrfyyy1p"/><path class="k8574nm4j"/></g>`,
		"fallback": "iconoven:presentation-remote",
	});
}

export default Component;

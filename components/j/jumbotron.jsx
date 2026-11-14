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

.qp8bxebds {
  d: path("m12.218 7.71l.868.473a1.5 1.5 0 0 1 0 2.634l-.868.473A1.5 1.5 0 0 1 10 9.973v-.946a1.5 1.5 0 0 1 2.218-1.317");
}

.y_v88lukn {
  d: path("M6 2.5h12A3.5 3.5 0 0 1 21.5 6v7a3.5 3.5 0 0 1-3.5 3.5H6A3.5 3.5 0 0 1 2.5 13V6A3.5 3.5 0 0 1 6 2.5m1 14v5m10-5v5");
}
</style><g class="hntgybcog"><path class="y_v88lukn"/><path class="qp8bxebds"/></g>`,
		"fallback": "uix:jumbotron",
	});
}

export default Component;

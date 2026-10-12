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

.nnau9wbxi {
  width: 11.5px;
  height: 2.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 1.25px;
}

.yp1kasbgf {
  d: path("M7 7.75h10v.5a3 3 0 0 1 2 2.8V19a2.25 2.25 0 0 1-2.25 2.25h-9.5A2.25 2.25 0 0 1 5 19v-7.95a3 3 0 0 1 2-2.8Zm1.5 6h7m-7 3H13");
}
</style><g class="hntgybcog"><rect class="nnau9wbxi"/><path class="yp1kasbgf"/></g>`,
		"fallback": "iconoven:jar",
	});
}

export default Component;

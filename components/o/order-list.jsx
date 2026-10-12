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

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}

.zbh77nbxp {
  d: path("M8 7.25h4.5m2 0H16m-8 3.5h4.5m2 0H16m-8 3.5h4.5m2 0H16m-8 3.5h8");
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="zbh77nbxp"/></g>`,
		"fallback": "iconoven:order-list",
	});
}

export default Component;

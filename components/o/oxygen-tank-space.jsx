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
		"content": `<style>.goe1jsb9d {
  width: 7px;
  height: 14px;
  x: 13.5px;
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

.itvqx0bta {
  width: 7px;
  height: 14px;
  x: 3.5px;
  y: 7.25px;
  rx: 3px;
}

.qgw_x90wz {
  d: path("M3.5 12h7m3 0h7M7 7.25V5a2.25 2.25 0 0 1 2.25-2.25h5.5A2.25 2.25 0 0 1 17 5v2.25");
}
</style><g class="hntgybcog"><rect class="itvqx0bta"/><rect class="goe1jsb9d"/><path class="qgw_x90wz"/></g>`,
		"fallback": "iconoven:oxygen-tank-space",
	});
}

export default Component;

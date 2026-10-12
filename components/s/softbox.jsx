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

.pex98_k4k {
  d: path("m4.6 3.6l2.15 2.15M19.4 3.6l-2.15 2.15M4.6 14.4l2.15-2.15M19.4 14.4l-2.15-2.15m-5.25 3v6m-3.75 0l3.75-3l3.75 3");
}

.uz4h04b7p {
  width: 10.5px;
  height: 6.5px;
  x: 6.75px;
  y: 5.75px;
  rx: 1px;
}

.yft25fu-m {
  width: 17.5px;
  height: 12.5px;
  x: 3.25px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="yft25fu-m"/><rect class="uz4h04b7p"/><path class="pex98_k4k"/></g>`,
		"fallback": "iconoven:softbox",
	});
}

export default Component;

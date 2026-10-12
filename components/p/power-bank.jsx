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

.pzijnrbqx {
  width: 14px;
  height: 12.5px;
  x: 2.75px;
  y: 5.75px;
  rx: 2.5px;
}

.vuwl2ub_y {
  d: path("M16.75 12h1.5a2.5 2.5 0 0 1 2.5 2.5v6.75M10.5 8.75L8.25 12h3.5L9.5 15.25");
}
</style><g class="hntgybcog"><rect class="pzijnrbqx"/><path class="vuwl2ub_y"/></g>`,
		"fallback": "iconoven:power-bank",
	});
}

export default Component;

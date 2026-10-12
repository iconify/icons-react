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

.iilc8fbwv {
  width: 7px;
  height: 2.25px;
  x: 8.5px;
  y: 14.25px;
  rx: 1.125px;
}

.ptleyrb5p {
  d: path("M3.25 21.25L6.5 3.75h11l3.25 17.5M10 3.75v10.5m4-10.5v10.5");
}
</style><g class="hntgybcog"><path class="ptleyrb5p"/><rect class="iilc8fbwv"/></g>`,
		"fallback": "iconoven:swing",
	});
}

export default Component;

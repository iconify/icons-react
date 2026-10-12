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
		"content": `<style>.eqw_z4b0h {
  d: path("M8.25 13h1.5L11 10.5l2 5l2-7l1.25 4.5h1.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.tth1ssbry {
  width: 16.5px;
  height: 18.5px;
  x: 3.75px;
  y: 2.75px;
  rx: 2.25px;
}

.xo46-mbjv {
  d: path("M6.75 6.25V18h10.5");
}
</style><g class="hntgybcog"><rect class="tth1ssbry"/><path class="xo46-mbjv"/><path class="eqw_z4b0h"/></g>`,
		"fallback": "iconoven:vitals-chart",
	});
}

export default Component;

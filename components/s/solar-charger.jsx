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
		"content": `<style>.a80mxs7on {
  d: path("M5 2.75h7q1 0 1.16.99l.93 5.52q.16.99-.84.99h-9.5q-1 0-.84-.99l.93-5.52Q4 2.75 5 2.75m3.55 0v7.5M3.4 6.5h10.25M8.5 10.25v4.5a2.5 2.5 0 0 0 2.5 2.5h3.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l1ddigndh {
  width: 6.5px;
  height: 10px;
  x: 14.75px;
  y: 11.25px;
  rx: 1.5px;
}

.rs2jj6bxl {
  d: path("M17 19h2");
}
</style><g class="hntgybcog"><path class="a80mxs7on"/><rect class="l1ddigndh"/><path class="rs2jj6bxl"/></g>`,
		"fallback": "iconoven:solar-charger",
	});
}

export default Component;

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

.mqop3pnrs {
  width: 8px;
  height: 2.5px;
  x: 8px;
  y: 18.25px;
  rx: 0.75px;
}

.ykh_u5b-w {
  d: path("M3.5 5.5h1.25q.75 0 .75.75v4.5q0 .75.75.75H20.5q.75 0 .75.75v1q0 .75-.75.75h-17q-.75 0-.75-.75v-7q0-.75.75-.75m.75 8.5v7.25M19.75 14v7.25");
}
</style><g class="hntgybcog"><path class="ykh_u5b-w"/><rect class="mqop3pnrs"/></g>`,
		"fallback": "iconoven:pew-bench",
	});
}

export default Component;

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
		"content": `<style>.g1ethsbxt {
  d: path("M8.25 2.75v18.5m5.5-6.75c-1.5-1.25-2.5-2.5-2.5-3.75a2.5 2.5 0 0 1 5 0c0 1.25-1 2.5-2.5 3.75");
}

.hntgybcog {
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
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="g1ethsbxt"/></g>`,
		"fallback": "iconoven:travel-journal",
	});
}

export default Component;

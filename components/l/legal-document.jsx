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

.rzzh4ie6d {
  d: path("M13.75 6.75c-.35-.65-.95-1-1.75-1c-1 0-1.75.6-1.75 1.4c0 1.95 3.5 1.75 3.5 3.7m-3.5 3.4c.35.65.95 1 1.75 1c1 0 1.75-.6 1.75-1.4c0-1.95-3.5-1.75-3.5-3.7m-1.75 8.1h7");
}

.x00qgzx7x {
  width: 14.5px;
  height: 18.5px;
  x: 4.75px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="x00qgzx7x"/><path class="rzzh4ie6d"/></g>`,
		"fallback": "iconoven:legal-document",
	});
}

export default Component;

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
		"content": `<style>.dep8nvbnd {
  width: 12.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.s3tkgxbgj {
  d: path("M9 15.5c-1.5-1.25-2.25-2.4-2.25-3.75a2.25 2.25 0 0 1 4.5 0c0 1.35-.75 2.5-2.25 3.75m6.25-5.25l6-3v9.5l-6-3");
}
</style><g class="hntgybcog"><rect class="dep8nvbnd"/><path class="s3tkgxbgj"/></g>`,
		"fallback": "iconoven:travel-vlog",
	});
}

export default Component;

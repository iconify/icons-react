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
		"content": `<style>.f27dp89fy {
  d: path("M17.51 14.94c-.28-.6-.83-1-1.49-1c-.89 0-1.56.52-1.56 1.15c0 1.63 3.12.81 3.12 2.37c0 .65-.67 1.11-1.56 1.11c-.69 0-1.28-.37-1.52-.97M3.25 12.5L7.5 8.25L10.25 11l6.5-6.5m-3.5 0h3.5V8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mjuvf7ivb {
  cx: 16px;
  cy: 16.25px;
  r: 5px;
}
</style><g class="hntgybcog"><circle class="mjuvf7ivb"/><path class="f27dp89fy"/></g>`,
		"fallback": "iconoven:investment",
	});
}

export default Component;

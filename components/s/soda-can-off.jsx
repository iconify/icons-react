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
		"content": `<style>.h1r6dobeh {
  d: path("M8.5 2.75h7M6 14q3-2.25 6 0c3 2.25 4 1.5 6 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o2b98om6d {
  width: 12px;
  height: 16px;
  x: 6px;
  y: 5.25px;
  rx: 2.25px;
}
</style><g class="hntgybcog"><rect class="o2b98om6d"/><path class="h1r6dobeh"/></g>`,
		"fallback": "iconoven:soda-can-off",
	});
}

export default Component;

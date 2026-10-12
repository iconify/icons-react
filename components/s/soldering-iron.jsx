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
		"content": `<style>.fi8vse7ag {
  d: path("m12.75 8.26l.55.54q1.59 1.59 0 3.18l-2.79 2.79q-1.59 1.59-3.18 0l-.55-.55q-1.59-1.59 0-3.18l2.79-2.78q1.59-1.59 3.18 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yopbfmbxn {
  d: path("m12.09 7.6l2.99-2.99l3.73-1.86l-1.87 3.73l-2.98 2.98Zm-5.03 6.9l-.75.74a2.11 2.11 0 0 0 0 2.98l2.24 2.24");
}
</style><g class="hntgybcog"><path class="fi8vse7ag"/><path class="yopbfmbxn"/></g>`,
		"fallback": "iconoven:soldering-iron",
	});
}

export default Component;

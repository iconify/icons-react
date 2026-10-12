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

.qwslxfbsh {
  width: 5.5px;
  height: 3.25px;
  x: 9.25px;
  y: 2.75px;
  rx: 1.5px;
}

.yfn6m1bzp {
  d: path("M10 6L7 20.5l1.5.75M14 6l3 14.5l-1.5.75");
}
</style><g class="hntgybcog"><rect class="qwslxfbsh"/><path class="yfn6m1bzp"/></g>`,
		"fallback": "iconoven:tweezers",
	});
}

export default Component;

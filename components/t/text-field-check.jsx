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

.ppkmu3b3c {
  width: 18.5px;
  height: 10px;
  x: 2.75px;
  y: 7px;
  rx: 2.5px;
}

.w4jmn4blp {
  d: path("M6.25 12h4.5m3-2.5v5");
}
</style><g class="hntgybcog"><rect class="ppkmu3b3c"/><path class="w4jmn4blp"/></g>`,
		"fallback": "iconoven:text-field-check",
	});
}

export default Component;

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
		"content": `<style>.a6ufl3j2l {
  d: path("m14.279 6.488l5.477 9.585A2.625 2.625 0 0 1 17.477 20H6.523a2.625 2.625 0 0 1-2.279-3.927l5.477-9.585a2.625 2.625 0 0 1 4.558 0");
}

.dmekfdbhp {
  fill: currentColor;
  d: path("M8 16a1 1 0 1 0 2 0a1 1 0 1 0-2 0m4-3.5a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7.5-4a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="a6ufl3j2l"/><path class="dmekfdbhp"/></g>`,
		"fallback": "uix:loose-chippings-sign",
	});
}

export default Component;

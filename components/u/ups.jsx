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
		"content": `<style>.h1_jqsb7i {
  d: path("M8.5 5.75h7M13 9.5l-3 4.25h4L11 18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvosu0b2k {
  width: 14px;
  height: 18.5px;
  x: 5px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="qvosu0b2k"/><path class="h1_jqsb7i"/></g>`,
		"fallback": "iconoven:ups",
	});
}

export default Component;

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
		"content": `<style>.eg34zmbzq {
  d: path("M6 8h9v5m-7 0l9 8m0-8l-9 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.uabevdgnf {
  d: path("m4.75 3l2.5 10H18.5");
}
</style><g class="hntgybcog"><path class="uabevdgnf"/><path class="eg34zmbzq"/></g>`,
		"fallback": "uix:lawn-chair",
	});
}

export default Component;

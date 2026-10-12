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

.lznqh1bcv {
  d: path("M10.5 16.25h3");
}

.svvgts2gh {
  width: 8px;
  height: 4.5px;
  x: 8px;
  y: 14px;
  rx: 1px;
}

.termwb96j {
  width: 18.5px;
  height: 4.5px;
  x: 2.75px;
  y: 3.75px;
  rx: 1.5px;
}

.z41hf4b9g {
  width: 16.5px;
  height: 10px;
  x: 3.75px;
  y: 11.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="termwb96j"/><rect class="z41hf4b9g"/><rect class="svvgts2gh"/><path class="lznqh1bcv"/></g>`,
		"fallback": "iconoven:product-box",
	});
}

export default Component;

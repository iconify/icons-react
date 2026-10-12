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
		"content": `<style>.cc4g6ccbh {
  d: path("m4.25 10l-1.5 2l1.5 2m15.5-4l1.5 2l-1.5 2");
}

.gln1_k_7d {
  width: 4px;
  height: 4px;
  x: 13.25px;
  y: 10px;
  rx: 1.25px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wbemmcbwu {
  width: 4px;
  height: 4px;
  x: 6.75px;
  y: 10px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><path class="cc4g6ccbh"/><rect class="wbemmcbwu"/><rect class="gln1_k_7d"/></g>`,
		"fallback": "iconoven:pagination",
	});
}

export default Component;

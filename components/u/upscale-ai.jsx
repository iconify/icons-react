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

.lkve0tb3s {
  width: 8px;
  height: 8px;
  x: 2.75px;
  y: 13.25px;
  rx: 2px;
}

.zxa3sv3va {
  d: path("M6.75 13.25v8m-4-4h8M10 2.75h8.75a2.5 2.5 0 0 1 2.5 2.5V14m-8.5-2.75l5.5-5.5m-4.5 0h4.5v4.5");
}
</style><g class="hntgybcog"><rect class="lkve0tb3s"/><path class="zxa3sv3va"/></g>`,
		"fallback": "iconoven:upscale-ai",
	});
}

export default Component;

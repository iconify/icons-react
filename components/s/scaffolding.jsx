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

.nsmcnccwu {
  width: 15px;
  height: 2.5px;
  x: 4.5px;
  y: 6.75px;
  rx: 0.5px;
}

.rswldpbuf {
  width: 15px;
  height: 2.5px;
  x: 4.5px;
  y: 13.75px;
  rx: 0.5px;
}

.upl-ibc5f {
  d: path("M9.5 16.25v5m5-5v5m-5-2.5h5m-5-9.5v4.5m5-4.5v4.5m-5-2.25h5");
}

.z9hyh8z2l {
  d: path("M4.5 2.75v18.5m15-18.5v18.5m-16.75 0h18.5M4.5 4.25h15");
}
</style><g class="hntgybcog"><path class="z9hyh8z2l"/><rect class="nsmcnccwu"/><rect class="rswldpbuf"/><path class="upl-ibc5f"/></g>`,
		"fallback": "iconoven:scaffolding",
	});
}

export default Component;

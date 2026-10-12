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

.mz5cwbcqd {
  d: path("M9.25 13.75h5.5a1.5 1.5 0 0 1 1.5 1.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-5.5a1.5 1.5 0 0 1-1.5-1.5v-1.5a1.5 1.5 0 0 1 1.5-1.5m2.75-3.5v3.5M18.75 8H21a.25.25 0 0 1 .25.25v7.5A.25.25 0 0 1 21 16h-2.25");
}

.qfpx43bwz {
  width: 8.5px;
  height: 4.5px;
  x: 7.75px;
  y: 5.75px;
  rx: 1.5px;
}

.upddb4dxn {
  width: 13.5px;
  height: 18.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2.5px;
}
</style><g class="hntgybcog"><rect class="upddb4dxn"/><rect class="qfpx43bwz"/><path class="mz5cwbcqd"/></g>`,
		"fallback": "iconoven:transformer-block",
	});
}

export default Component;

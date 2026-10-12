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
		"content": `<style>.g0mrh1avi {
  width: 12px;
  height: 7.5px;
  x: 6px;
  y: 9px;
  rx: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pcbwoedwa {
  d: path("M6 12.75q-1.75-.25-3.25-1.5M18 12.75q1.75-.25 3.25-1.5");
}

.u-gl1_w4y {
  d: path("M8.5 11.75h7m0 0v2");
}
</style><g class="hntgybcog"><path class="pcbwoedwa"/><rect class="g0mrh1avi"/><path class="u-gl1_w4y"/></g>`,
		"fallback": "iconoven:money-belt",
	});
}

export default Component;

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
		"content": `<style>.ew68babsr {
  cx: 5.5px;
  cy: 8.75px;
  r: 2px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.im1ubzb_f {
  width: 18.5px;
  height: 3.25px;
  x: 2.75px;
  y: 13.5px;
  rx: 1.5px;
}

.l2vfdiurs {
  d: path("M6.5 16.75v4.5m11-4.5v4.5");
}

.mwe-9d8rn {
  cx: 12px;
  cy: 5.5px;
  r: 2px;
}

.xd6dk168z {
  cx: 18.5px;
  cy: 8.75px;
  r: 2px;
}
</style><g class="hntgybcog"><circle class="ew68babsr"/><circle class="mwe-9d8rn"/><circle class="xd6dk168z"/><rect class="im1ubzb_f"/><path class="l2vfdiurs"/></g>`,
		"fallback": "iconoven:meeting-link",
	});
}

export default Component;

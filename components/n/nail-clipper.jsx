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
		"content": `<style>.huyutybox {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.75 16.25h.01");
}

.p-wqng6mx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m5.5 12l15.25-4.25M14 13.5v-3.1");
}

.x8x6b_wee {
  width: 15.5px;
  height: 4px;
  x: 2.75px;
  y: 14.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="x8x6b_wee"/><path class="p-wqng6mx"/><path class="huyutybox"/></g>`,
		"fallback": "iconoven:nail-clipper",
	});
}

export default Component;

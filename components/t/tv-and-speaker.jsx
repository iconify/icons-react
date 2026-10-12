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

.jiknxibhj {
  d: path("M4.75 3.25h14.5q2 0 2 2t-2 2h-7.5q-2 0-2 2v5q0 2-2 2h-3q-2 0-2-2v-9q0-2 2-2m1 13v2.5m-3 0h6");
}

.rjh8_qiqc {
  cx: 17px;
  cy: 16.25px;
  r: 1.75px;
}

.wh9p00brb {
  width: 8.5px;
  height: 11px;
  x: 12.75px;
  y: 10.25px;
  rx: 2px;
}
</style><g class="hntgybcog"><path class="jiknxibhj"/><rect class="wh9p00brb"/><circle class="rjh8_qiqc"/></g>`,
		"fallback": "iconoven:tv-and-speaker",
	});
}

export default Component;

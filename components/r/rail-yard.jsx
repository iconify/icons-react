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
		"content": `<style>.gbmp-207x {
  width: 7.25px;
  height: 4px;
  x: 14px;
  y: 3px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ic31tfbct {
  d: path("M2.75 5h10m-10 7h18.5m-18.5 7h18.5M5.75 5l7 7m-.5 0l7 7");
}
</style><g class="hntgybcog"><path class="ic31tfbct"/><rect class="gbmp-207x"/></g>`,
		"fallback": "iconoven:rail-yard",
	});
}

export default Component;

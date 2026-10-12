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

.o2tws2j4q {
  width: 18.5px;
  height: 12px;
  x: 2.75px;
  y: 6px;
  rx: 2.5px;
}

.qhvrk_ymv {
  cx: 8.25px;
  cy: 12px;
  r: 3px;
}

.sqcb-fb9g {
  d: path("M8.25 10.5V12l1 .75m5-2.5h3.5m-3.5 3.5h2");
}
</style><g class="hntgybcog"><rect class="o2tws2j4q"/><circle class="qhvrk_ymv"/><path class="sqcb-fb9g"/></g>`,
		"fallback": "iconoven:time-slot",
	});
}

export default Component;

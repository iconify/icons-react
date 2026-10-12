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
		"content": `<style>.corng9b1x {
  width: 3.5px;
  height: 2.75px;
  x: 6.5px;
  y: 13px;
  rx: 1px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.o06cdlbtu {
  d: path("M3.25 14.375H6.5m3.5 0h4m3.5 0h3.25");
}

.t3ao9d5hv {
  width: 3.5px;
  height: 2.75px;
  x: 14px;
  y: 13px;
  rx: 1px;
}

.xwdo12bgl {
  d: path("M3.25 17.25v-3.5a8.75 8.75 0 0 1 17.5 0v3.5a1.5 1.5 0 0 1-1.5 1.5H4.75a1.5 1.5 0 0 1-1.5-1.5M12 5v5.5");
}
</style><g class="hntgybcog"><path class="xwdo12bgl"/><rect class="corng9b1x"/><rect class="t3ao9d5hv"/><path class="o06cdlbtu"/></g>`,
		"fallback": "iconoven:swim-cap",
	});
}

export default Component;

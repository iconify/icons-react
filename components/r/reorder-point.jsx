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

.lhup9ggaa {
  width: 10px;
  height: 6.5px;
  x: 2.75px;
  y: 14.75px;
  rx: 1.25px;
}

.sb_f-f-uj {
  d: path("M2.75 12.5h18.5m-.5-5.5a3.25 3.25 0 1 1-3.25-3.25l-1.25-1");
}

.yuzfgcx0k {
  width: 7.5px;
  height: 4.75px;
  x: 4px;
  y: 5.5px;
  rx: 1.25px;
}
</style><g class="hntgybcog"><rect class="yuzfgcx0k"/><rect class="lhup9ggaa"/><path class="sb_f-f-uj"/></g>`,
		"fallback": "iconoven:reorder-point",
	});
}

export default Component;

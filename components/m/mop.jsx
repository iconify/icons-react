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

.kt5pgcbcw {
  d: path("M9 15.25L7 20.5m5-5.25v6m3-6l1.75 4.5");
}

.nv_50bc_a {
  d: path("M12 2.75v9");
}

.pqgoz4lbp {
  width: 9px;
  height: 3.5px;
  x: 7.5px;
  y: 11.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><path class="nv_50bc_a"/><rect class="pqgoz4lbp"/><path class="kt5pgcbcw"/></g>`,
		"fallback": "iconoven:mop",
	});
}

export default Component;

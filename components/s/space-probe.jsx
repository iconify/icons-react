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

.jlb_f7vxn {
  d: path("m9.75 15.5l-7 1.5m11.5-1.5l7 1.5");
}

.odyp3eb9b {
  width: 4.5px;
  height: 3.75px;
  x: 9.75px;
  y: 13.75px;
  rx: 1px;
}

.x6qciqbvk {
  d: path("M5.21 9.84L17.42 5.4A6.5 3.75-20 0 1 5.21 9.84m6.11-2.22l-1.2-3.29m2.48 6.81l-.6 2.61");
}
</style><g class="hntgybcog"><path class="x6qciqbvk"/><rect class="odyp3eb9b"/><path class="jlb_f7vxn"/></g>`,
		"fallback": "iconoven:space-probe",
	});
}

export default Component;

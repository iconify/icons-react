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

.qzkvbx_uy {
  width: 18.5px;
  height: 14.5px;
  x: 2.75px;
  y: 4.75px;
  rx: 2px;
}

.y2f1b10yl {
  d: path("M12 4.75v14.5M9.5 12h-4m2-2l-2 2l2 2m7-2h4m-2-2l2 2l-2 2");
}
</style><g class="hntgybcog"><rect class="qzkvbx_uy"/><path class="y2f1b10yl"/></g>`,
		"fallback": "iconoven:split-cells",
	});
}

export default Component;

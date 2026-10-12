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

.qf_ij6_eg {
  d: path("M14 20.25h6a.75.75 0 0 0 .75-.75c0-2.9-1.7-5-3.75-5s-3.75 2.1-3.75 5a.75.75 0 0 0 .75.75");
}

.ttdy-b6jx {
  cx: 7px;
  cy: 7.5px;
  r: 3px;
}

.yfr-mbcnn {
  cx: 17px;
  cy: 7.5px;
  r: 3px;
}

.zmbl4dg7s {
  d: path("M4 20.25h6a.75.75 0 0 0 .75-.75c0-2.9-1.7-5-3.75-5s-3.75 2.1-3.75 5a.75.75 0 0 0 .75.75");
}
</style><g class="hntgybcog"><circle class="ttdy-b6jx"/><path class="zmbl4dg7s"/><circle class="yfr-mbcnn"/><path class="qf_ij6_eg"/></g>`,
		"fallback": "iconoven:partnership",
	});
}

export default Component;

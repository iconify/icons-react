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

.kf_mvwa8r {
  d: path("M4 20.25h11a.75.75 0 0 0 .75-.75c0-3-2.8-5.25-6.25-5.25S3.25 16.5 3.25 19.5a.75.75 0 0 0 .75.75");
}

.qlxhoobyj {
  d: path("M16.75 10.25v-1a1.5 1.5 0 0 1 3 0v1");
}

.rknchmb5r {
  cx: 9.5px;
  cy: 7.75px;
  r: 3.75px;
}

.xe4z0_b1q {
  width: 5.5px;
  height: 4.5px;
  x: 15.5px;
  y: 10.25px;
  rx: 1px;
}
</style><g class="hntgybcog"><circle class="rknchmb5r"/><path class="kf_mvwa8r"/><rect class="xe4z0_b1q"/><path class="qlxhoobyj"/></g>`,
		"fallback": "iconoven:user-lock",
	});
}

export default Component;

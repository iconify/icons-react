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
		"content": `<style>.ugzm_hzvo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3.5h10V6M7 6h12a1.5 1.5 0 0 1 1.5 1.5A1.5 1.5 0 0 1 19 9H7a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 7 6m1 6v3m0 3v2.5m5-7v4m5-5.5v3m0 3v2.5");
}
</style><path class="ugzm_hzvo"/>`,
		"fallback": "uix:rain-shower-head",
	});
}

export default Component;

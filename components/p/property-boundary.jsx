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
		"content": `<style>.t_ycn5b4g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5h19m-18 0V9l1-2l1 2v12.5m5.5 0V9l1-2l1 2v12.5m5.5 0V9l1-2l1 2v12.5M7 14h2.5m5 0H17");
}
</style><path class="t_ycn5b4g"/>`,
		"fallback": "uix:property-boundary",
	});
}

export default Component;

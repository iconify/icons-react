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
		"content": `<style>.t_gmocbqs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21.5V9h19v12.5m-19-6h19M18.25 9V2.5M8.75 9v6.5m5.5-6.5v6.5");
}
</style><path class="t_gmocbqs"/>`,
		"fallback": "uix:volleyball-antenna",
	});
}

export default Component;

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
		"content": `<style>.hhg_yxb7b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 17q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0M3 21.5h18m-9-19V11M8.5 7.5L12 11l3.5-3.5");
}
</style><path class="hhg_yxb7b"/>`,
		"fallback": "uix:tide-falling",
	});
}

export default Component;

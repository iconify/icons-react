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
		"content": `<style>.ey0mkgb_n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.5 2.5h7A1.5 1.5 0 0 1 20 4a1.5 1.5 0 0 1-1.5 1.5h-7A1.5 1.5 0 0 1 10 4a1.5 1.5 0 0 1 1.5-1.5m.5 3v16h6v-16M2.5 20q2.5-1.25 5 0q2.25 1.25 4.5 0M3.5 8h5.75M7.5 6.25L9.25 8L7.5 9.75m-4 4.75h5.75M7.5 12.75l1.75 1.75l-1.75 1.75");
}
</style><path class="ey0mkgb_n"/>`,
		"fallback": "uix:intake-tower",
	});
}

export default Component;

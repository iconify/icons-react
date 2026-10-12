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
		"content": `<style>.lg39d2pey {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 2.75h8c0 2.75-1.75 4.25-1.75 6.5s2.25 4 2.25 6.75c0 1.75-1.5 2.5-4.5 2.5s-4.5-.75-4.5-2.5c0-2.75 2.25-4.5 2.25-6.75S8 5.5 8 2.75m1.25 9.5h5.5M3.75 20c1.5.9 4.25 1.25 8.25 1.25s6.75-.35 8.25-1.25");
}
</style><path class="lg39d2pey"/>`,
		"fallback": "iconoven:tea-glass-turkish",
	});
}

export default Component;

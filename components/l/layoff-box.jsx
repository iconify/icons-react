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
		"content": `<style>.lwn3neb3r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 11.25V5.5a1 1 0 0 1 1-1H10a1 1 0 0 1 1 1v5.75M15.5 10V6.5m0 1c0-2 1.25-3.75 3.5-3.75c0 2-1.25 3.75-3.5 3.75M3.75 11.25h16.5L19 19.75a1.75 1.75 0 0 1-1.75 1.5H6.75A1.75 1.75 0 0 1 5 19.75Zm6.25 3.5h4");
}
</style><path class="lwn3neb3r"/>`,
		"fallback": "iconoven:layoff-box",
	});
}

export default Component;

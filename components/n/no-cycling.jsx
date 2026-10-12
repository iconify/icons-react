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
		"content": `<style>.c7cjpzpsv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 16a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m14.5-3.5a3.5 3.5 0 0 1 3.17 4.98m-4.71 1.66a3.5 3.5 0 0 1-1.6-1.6m1.66-4.71a3.5 3.5 0 0 1 1.48-.33M6.5 16l.5-5.75m-2 0h2.07M7 12.5l1.86-.45m5.12-1.25l3.27-.8m.14 4.2L17 8m-1.5 0h3M3.75 3.75l16.5 16.5");
}
</style><path class="c7cjpzpsv"/>`,
		"fallback": "iconoven:no-cycling",
	});
}

export default Component;

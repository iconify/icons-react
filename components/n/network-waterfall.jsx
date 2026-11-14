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
		"content": `<style>.aep1608qc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 2.5v19M7.75 4h4.5A1.75 1.75 0 0 1 14 5.75a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 6 5.75A1.75 1.75 0 0 1 7.75 4m4 6.25h4.5A1.75 1.75 0 0 1 18 12a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 10 12a1.75 1.75 0 0 1 1.75-1.75m3.5 6.25h4.5a1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 19.75 20h-4.5a1.75 1.75 0 0 1-1.75-1.75a1.75 1.75 0 0 1 1.75-1.75");
}
</style><path class="aep1608qc"/>`,
		"fallback": "uix:network-waterfall",
	});
}

export default Component;

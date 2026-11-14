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
		"content": `<style>.coog30akl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m13-6.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0m0 13a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0M8 12h4m4-6.5h-2.5A1.5 1.5 0 0 0 12 7v10a1.5 1.5 0 0 0 1.5 1.5H16");
}
</style><path class="coog30akl"/>`,
		"fallback": "uix:org-chart-horizontal",
	});
}

export default Component;

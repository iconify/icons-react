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
		"content": `<style>.il4xswb_z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 2.5h6A1.5 1.5 0 0 1 16.5 4A1.5 1.5 0 0 1 15 5.5H9A1.5 1.5 0 0 1 7.5 4A1.5 1.5 0 0 1 9 2.5m-.5 3l-4 10q7.5 1.5 15 0l-4-10m-6 10.75v5.25m5-5.25v5.25");
}
</style><path class="il4xswb_z"/>`,
		"fallback": "uix:midi-skirt",
	});
}

export default Component;

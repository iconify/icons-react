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
		"content": `<style>.ym6m36xad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0M3 12q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0M3 17.5q2.25-2.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ym6m36xad"/>`,
		"fallback": "uix:waves-weather",
	});
}

export default Component;

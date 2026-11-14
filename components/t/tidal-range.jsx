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
		"content": `<style>.sftrssbrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4q2.375-2 4.75 0T12 4t4.75 0t4.75 0m-19 16q2.375-2 4.75 0T12 20t4.75 0t4.75 0M12 8v8m-2.5-5.5L12 8l2.5 2.5m-5 3L12 16l2.5-2.5");
}
</style><path class="sftrssbrj"/>`,
		"fallback": "uix:tidal-range",
	});
}

export default Component;

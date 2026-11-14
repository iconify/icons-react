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
		"content": `<style>.o7630oika {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 3.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0M12 4.75v9.75m0 0c0 5.5 6 5.5 6 .5m-6-.5C12 20 6 20 6 15m12 0l-1.25 1.25M6 15l1.25 1.25");
}
</style><path class="o7630oika"/>`,
		"fallback": "uix:treble-hook",
	});
}

export default Component;

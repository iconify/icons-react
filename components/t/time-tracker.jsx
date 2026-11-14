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
		"content": `<style>.k-xw76b6e {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 13.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0m5.75-11h4.5M12 2.5v3m0 8l3-3");
}
</style><path class="k-xw76b6e"/>`,
		"fallback": "uix:time-tracker",
	});
}

export default Component;

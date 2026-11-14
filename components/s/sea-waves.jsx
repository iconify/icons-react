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
		"content": `<style>.uacrm-_ln {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8q2.25-2 4.5 0T12 8t4.5 0T21 8M3 13q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0M3 18q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="uacrm-_ln"/>`,
		"fallback": "uix:sea-waves",
	});
}

export default Component;

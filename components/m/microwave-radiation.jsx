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
		"content": `<style>.w1js_etav {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 6q3-3 6 0t6 0t6 0M3 12q3-3 6 0t6 0t6 0M3 18q3-3 6 0t6 0t6 0");
}
</style><path class="w1js_etav"/>`,
		"fallback": "uix:microwave-radiation",
	});
}

export default Component;

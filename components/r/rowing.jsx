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
		"content": `<style>.rfslvsbsi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 12.5h18c-3.5 4-14.5 4-18 0m13-9l-7 14M2.5 20q2.25-1.5 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="rfslvsbsi"/>`,
		"fallback": "uix:rowing",
	});
}

export default Component;

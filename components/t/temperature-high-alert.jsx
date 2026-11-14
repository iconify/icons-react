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
		"content": `<style>.z60-y8brj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13.5V5.25a2.75 2.75 0 0 1 5.5 0v8.25a4.5 4.5 0 1 1-5.5 0M9 17V5.5m9 9.25v3.5M18 21h.01");
}
</style><path class="z60-y8brj"/>`,
		"fallback": "uix:temperature-high-alert",
	});
}

export default Component;

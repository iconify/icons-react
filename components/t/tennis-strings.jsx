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
		"content": `<style>.ont7ohbly {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 9a6.5 7 0 1 0 13 0a6.5 7 0 1 0-13 0m6.5 7v5.5m-2.25-19v13m4.5-13v13m-8.5-8.75h12.5m-12.5 4.5h12.5");
}
</style><path class="ont7ohbly"/>`,
		"fallback": "uix:tennis-strings",
	});
}

export default Component;

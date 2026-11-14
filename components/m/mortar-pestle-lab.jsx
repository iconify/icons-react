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
		"content": `<style>.v97jdtoxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11.5h17c0 5.5-3.5 9-8.5 9s-8.5-3.5-8.5-9m6.75 0V4.25a1.75 1.75 0 0 1 3.5 0v7.25");
}
</style><path class="v97jdtoxo"/>`,
		"fallback": "uix:mortar-pestle-lab",
	});
}

export default Component;

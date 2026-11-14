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
		"content": `<style>.hqa53jbjw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.501 5.501L14.91 7.85a1.75 1.75 0 0 1-1.501 2.65h-2.818A1.75 1.75 0 0 1 9.09 7.85l1.409-2.349a1.75 1.75 0 0 1 3.002 0M5.625 13.5h2.25a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 7.875 21h-2.25A2.625 2.625 0 0 1 3 18.375v-2.25A2.625 2.625 0 0 1 5.625 13.5m7.875 3.75a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0");
}
</style><path class="hqa53jbjw"/>`,
		"fallback": "uix:shapes-triangle-square-circle",
	});
}

export default Component;

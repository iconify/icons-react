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
		"content": `<style>.h2eevkbgd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 11.75a8.75 8.75 0 0 1 17.5 0a3.75 3.75 0 0 0-5.83 0a3.75 3.75 0 0 0-5.84 0a3.75 3.75 0 0 0-5.83 0m4.5 8.5v-2.5q0-1 .77-1.64l2.71-2.22q.77-.64 1.54 0l2.71 2.22q.77.64.77 1.64v2.5q0 1-1 1h-6.5q-1 0-1-1");
}
</style><path class="h2eevkbgd"/>`,
		"fallback": "iconoven:insurance-umbrella",
	});
}

export default Component;

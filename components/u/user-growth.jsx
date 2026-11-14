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
		"content": `<style>.o644twkpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2 21c0-1.75.9-2.75 2.25-2.75s2.25 1 2.25 2.75m1.25 0c0-3 1.15-4.75 2.75-4.75S13.25 18 13.25 21m1.25 0c0-4.5 1.5-7.5 3.75-7.5S22 16.5 22 21M2.75 15.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0m5.5-3.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m7-4.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}
</style><path class="o644twkpi"/>`,
		"fallback": "uix:user-growth",
	});
}

export default Component;

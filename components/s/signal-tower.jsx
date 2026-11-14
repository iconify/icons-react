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
		"content": `<style>.e0sk2mbuu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 21.5L12 9l4.5 12.5m-7.25-5.25h5.5M10.5 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8.103 8.25a4.5 4.5 0 0 1 0-4.5m7.794 0a4.5 4.5 0 0 1 0 4.5M4.75 9.381a8 8 0 0 1 0-6.762m14.5 0a8 8 0 0 1 0 6.762");
}
</style><path class="e0sk2mbuu"/>`,
		"fallback": "uix:signal-tower",
	});
}

export default Component;

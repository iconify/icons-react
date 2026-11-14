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
		"content": `<style>.e41fb2b5z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 4.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5.5 9.25h13m-6 0L9 15l5.5 1.75l-2 4.75h3.25M4.25 5.25zA1.25 1.25 0 0 1 5.5 6.5V12a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 3 12V6.5a1.25 1.25 0 0 1 1.25-1.25m15.5 0zA1.25 1.25 0 0 1 21 6.5V12a1.25 1.25 0 0 1-1.25 1.25A1.25 1.25 0 0 1 18.5 12V6.5a1.25 1.25 0 0 1 1.25-1.25");
}
</style><path class="e41fb2b5z"/>`,
		"fallback": "uix:squat-lift",
	});
}

export default Component;

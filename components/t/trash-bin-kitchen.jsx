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
		"content": `<style>.n4s9uyzab {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 6.5a6.75 3.75 0 0 1 13.5 0ZM6.5 9h11q1.5 0 1.35 1.49l-.95 9.27q-.15 1.49-1.65 1.49h-8.5q-1.5 0-1.65-1.49l-.95-9.27Q5 9 6.5 9m3.5 3.25v5.5m4-5.5v5.5m4.4 1.5h2.85");
}
</style><path class="n4s9uyzab"/>`,
		"fallback": "iconoven:trash-bin-kitchen",
	});
}

export default Component;

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
		"content": `<style>.uow-ab90p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5h19M3 11.25a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0m7 5.5a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0m7-5.5a2 3.25 0 1 0 4 0a2 3.25 0 1 0-4 0M5 3.5V8m7-4.5v10m7-10V8");
}
</style><path class="uow-ab90p"/>`,
		"fallback": "uix:lanterns-string",
	});
}

export default Component;

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
		"content": `<style>.pgx33-bbr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 16a9.5 4.5 0 1 0 19 0a9.5 4.5 0 1 0-19 0m7.75-12h3.5a1.75 1.75 0 0 1 1.75 1.75a1.75 1.75 0 0 1-1.75 1.75h-3.5A1.75 1.75 0 0 1 8.5 5.75A1.75 1.75 0 0 1 10.25 4M9.5 7.5v8m5-8v8");
}
</style><path class="pgx33-bbr"/>`,
		"fallback": "uix:stationary-boundary",
	});
}

export default Component;

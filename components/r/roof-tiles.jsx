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
		"content": `<style>.td20ip0rl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m3.747 17.768l6.944-12.425a1.5 1.5 0 0 1 2.618 0l6.944 12.425A1.5 1.5 0 0 1 18.943 20H5.057a1.5 1.5 0 0 1-1.31-2.232M7.5 11h9M5 15.5h14m-7-8V11m-2 0v4.5m4-4.5v4.5m-6 0V20m4-4.5V20m4-4.5V20");
}
</style><path class="td20ip0rl"/>`,
		"fallback": "uix:roof-tiles",
	});
}

export default Component;

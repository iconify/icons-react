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
		"content": `<style>.kw33jdbvp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.654 4.75h6.692a1.75 1.75 0 0 1 1.609 1.061l1.5 3.5a1.75 1.75 0 0 1-1.609 2.439H7.154a1.75 1.75 0 0 1-1.609-2.439l1.5-3.5A1.75 1.75 0 0 1 8.654 4.75m-1.154 7l-3 7.5m-2 0h4m10-7.5l3 7.5m-2 0h4m-9.5-7.5v7.5m-2 0h4");
}
</style><path class="kw33jdbvp"/>`,
		"fallback": "uix:lander-legs",
	});
}

export default Component;

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
		"content": `<style>.zd-yk9b9h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 7a4 4 0 1 0 8 0a4 4 0 1 0-8 0M3.5 21.5c0-4 2-6.5 5-7v6l7-6v6l-7-6m7 0c3 .5 5 3 5 7");
}
</style><path class="zd-yk9b9h"/>`,
		"fallback": "uix:referee-boxing",
	});
}

export default Component;

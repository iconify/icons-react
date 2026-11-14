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
		"content": `<style>.y_xadn4dy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.25 5.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M3 21.5V15c0-2.25 2-3.75 5-3.75c1.75 0 2.75.5 3.5 1.25l7 4.75m-7-4.75c1 1 1.5 1.5 1.5 3v6m7.5-.5h.01");
}
</style><path class="y_xadn4dy"/>`,
		"fallback": "uix:penalty-signal",
	});
}

export default Component;

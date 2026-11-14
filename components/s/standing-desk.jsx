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
		"content": `<style>.uufq-7vjj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 7h9.5A1.5 1.5 0 0 1 15 8.5a1.5 1.5 0 0 1-1.5 1.5H4a1.5 1.5 0 0 1-1.5-1.5A1.5 1.5 0 0 1 4 7m-.5 14.5h4m-2 0V10M10 21.5h4m-2 0V10m5.25-3.75L19.5 4l2.25 2.25M19.5 4v16m-2.25-2.25L19.5 20l2.25-2.25");
}
</style><path class="uufq-7vjj"/>`,
		"fallback": "uix:standing-desk",
	});
}

export default Component;

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
		"content": `<style>.j7-x0bq5g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20V4M5 7l3-3l3 3m5-3v16m-3-3l3 3l3-3");
}
</style><path class="j7-x0bq5g"/>`,
		"fallback": "uix:sort-arrows",
	});
}

export default Component;

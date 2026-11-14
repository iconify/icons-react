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
		"content": `<style>.n3go18bbf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 21L9 10l1.5 1.5h3L15 10l6.5 11Zm9.5-9.5V21m0-13.75V3M9 7L7.5 4.5M15 7l1.5-2.5");
}
</style><path class="n3go18bbf"/>`,
		"fallback": "uix:volcano-cross-section",
	});
}

export default Component;

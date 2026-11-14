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
		"content": `<style>.lw81a_b9i {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m14-10a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M9 14l2-1.25m2.25-1.5L15 10");
}
</style><path class="lw81a_b9i"/>`,
		"fallback": "uix:pass-map",
	});
}

export default Component;

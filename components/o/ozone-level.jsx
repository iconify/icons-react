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
		"content": `<style>.jkpxqoleo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m12 0a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0M7.25 17a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0m1-10.5h6.5M6.5 9L9 14.5m7-5.75l-4.5 6m4 6.25v-2.5m2.75 2.5v-4.5M21 21v-6.5");
}
</style><path class="jkpxqoleo"/>`,
		"fallback": "uix:ozone-level",
	});
}

export default Component;

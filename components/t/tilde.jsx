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
		"content": `<style>.qjbhow2qn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 14.25C5.5 11.5 7.5 10.5 9.5 11.5l5 2.5c2 1 4 0 5.25-2.75");
}
</style><path class="qjbhow2qn"/>`,
		"fallback": "iconoven:tilde",
	});
}

export default Component;

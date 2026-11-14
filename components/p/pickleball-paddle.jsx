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
		"content": `<style>.r94eiib5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.75 2.5h2.5a6.25 6.25 0 0 1 6.25 6.25A6.25 6.25 0 0 1 13.25 15h-2.5A6.25 6.25 0 0 1 4.5 8.75a6.25 6.25 0 0 1 6.25-6.25m1 12.5h.5A1.75 1.75 0 0 1 14 16.75v3a1.75 1.75 0 0 1-1.75 1.75h-.5A1.75 1.75 0 0 1 10 19.75v-3A1.75 1.75 0 0 1 11.75 15M9.5 6.5h.01m4.99 0h.01M9.5 11h.01m4.99 0h.01");
}
</style><path class="r94eiib5s"/>`,
		"fallback": "uix:pickleball-paddle",
	});
}

export default Component;

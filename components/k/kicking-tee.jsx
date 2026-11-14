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
		"content": `<style>.wp9-ulb-y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 8.5a4 6.25 0 1 0 8 0a4 6.25 0 1 0-8 0m1.25 11l.809-1.295a1.5 1.5 0 0 1 1.272-.705h1.338a1.5 1.5 0 0 1 1.272.705l.809 1.295a1.307 1.307 0 0 1-1.108 2h-3.284a1.307 1.307 0 0 1-1.108-2m3.5-13.25l-1.5 4.5M11 8.25L13 9");
}
</style><path class="wp9-ulb-y"/>`,
		"fallback": "uix:kicking-tee",
	});
}

export default Component;

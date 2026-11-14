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
		"content": `<style>.rkte1hbar {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 3.5C5 3.5 4 5.5 4 8s1 4 1.5 6.5l1 5c.25 1.25 1.75 1.25 2 0l1-4.5c.25-1 1.25-1.5 2.5-1.5s2.25.5 2.5 1.5l1 4.5c.25 1.25 1.75 1.25 2 0l1-5C19 12 20 10.5 20 8s-1-4.5-3.5-4.5c-2 0-3 1-4.5 1s-2.5-1-4.5-1");
}
</style><path class="rkte1hbar"/>`,
		"fallback": "uix:tooth",
	});
}

export default Component;

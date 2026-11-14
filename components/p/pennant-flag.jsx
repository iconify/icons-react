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
		"content": `<style>.w59u7h1it {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19M6.14 4.489l7.896 1.805a1.75 1.75 0 0 1 0 3.412L6.14 11.511A1.75 1.75 0 0 1 4 9.805v-3.61a1.75 1.75 0 0 1 2.14-1.706M2.5 21.5h3");
}
</style><path class="w59u7h1it"/>`,
		"fallback": "uix:pennant-flag",
	});
}

export default Component;

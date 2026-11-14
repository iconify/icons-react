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
		"content": `<style>.dppva43se {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 13.5c1-6 7-7.5 9.75-3.5L14 7.5a3 3 0 1 1 5.25-.5l.75 7c.5 4-2 6-5 6H3M14 7.5l5.25-.5");
}
</style><path class="dppva43se"/>`,
		"fallback": "uix:muscle-mass",
	});
}

export default Component;

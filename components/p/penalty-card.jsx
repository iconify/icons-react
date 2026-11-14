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
		"content": `<style>.cz7_6_x6r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m8.84 3.681l4.646.988a2.625 2.625 0 0 1 2.022 3.113l-2.235 10.515a2.625 2.625 0 0 1-3.113 2.022l-4.646-.988a2.625 2.625 0 0 1-2.022-3.113L5.727 5.703A2.625 2.625 0 0 1 8.84 3.681M18.5 7.5l3-1.5M19 12h2.5");
}
</style><path class="cz7_6_x6r"/>`,
		"fallback": "uix:penalty-card",
	});
}

export default Component;

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
		"content": `<style>.ucqwwcbuc {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m19 8.5l-7 10l-7-10c0-3 2.5-4 4-3c1-3 5-3 6 0c1.5-1 4 0 4 3m-14 0h14M10.5 21l1.5-2.5l1.5 2.5Z");
}
</style><path class="ucqwwcbuc"/>`,
		"fallback": "uix:jhalmuri",
	});
}

export default Component;

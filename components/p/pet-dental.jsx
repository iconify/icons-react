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
		"content": `<style>.t-e4ok5mp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 2.5c-2.5 0-3.5 2-3.5 4.5c0 3 2 4.5 2.5 7l.75 5c.25 1.25 1.75 1.25 2 0l.5-4c.25-1.25 1.5-1.25 1.75 0l.5 4c.25 1.25 1.75 1.25 2 0l1-5c.75-2.5 3-4 3-7c0-2.5-1-4.5-3.5-4.5c-1.5 0-2.25 1-3.5 1s-2-1-3.5-1m12.75 12.75q0 3.25 3.25 3.25q-3.25 0-3.25 3.25q0-3.25-3.25-3.25q3.25 0 3.25-3.25");
}
</style><path class="t-e4ok5mp"/>`,
		"fallback": "uix:pet-dental",
	});
}

export default Component;

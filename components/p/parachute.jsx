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
		"content": `<style>.jlygnibue {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 11a9 8.5 0 0 1 18 0q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0Q5.25 9.5 3 11m0 0l9 8l9-8m-9 0v8m0 0za1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 12 21.5a1.25 1.25 0 0 1-1.25-1.25A1.25 1.25 0 0 1 12 19");
}
</style><path class="jlygnibue"/>`,
		"fallback": "uix:parachute",
	});
}

export default Component;

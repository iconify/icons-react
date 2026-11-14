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
		"content": `<style>.w06d9w70a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 10.5h10a1 1 0 0 1 1 1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1a1 1 0 0 1 1-1m1 2V19m8-6.5V19m-8.75 0h9.5A1.25 1.25 0 0 1 18 20.25a1.25 1.25 0 0 1-1.25 1.25h-9.5A1.25 1.25 0 0 1 6 20.25A1.25 1.25 0 0 1 7.25 19M10.5 3h3v1c2 1 2.5 2.5 2.5 4s-1.5 2.5-4 2.5s-4-1-4-2.5s.5-3 2.5-4Z");
}
</style><path class="w06d9w70a"/>`,
		"fallback": "uix:museum-pedestal",
	});
}

export default Component;

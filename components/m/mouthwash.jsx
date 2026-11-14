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
		"content": `<style>.av7q3rb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 19.5V12a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v7.5a1.5 1.5 0 0 1-1.5 1.5h-6A1.5 1.5 0 0 1 5 19.5m3.25-16h2.5a1.75 1.75 0 0 1 1.75 1.75v2A1.75 1.75 0 0 1 10.75 9h-2.5A1.75 1.75 0 0 1 6.5 7.25v-2A1.75 1.75 0 0 1 8.25 3.5m8.5 3.5c2.75 2 3.75 5 2.25 8.5m1.25 3.5h.01");
}
</style><path class="av7q3rb5p"/>`,
		"fallback": "uix:mouthwash",
	});
}

export default Component;

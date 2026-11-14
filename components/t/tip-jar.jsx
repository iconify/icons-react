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
		"content": `<style>.lbaa-hb5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 6.5h11A1.5 1.5 0 0 1 19 8a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 8a1.5 1.5 0 0 1 1.5-1.5m0 3C4.75 12 4.75 21 8.5 21h7c3.75 0 3.75-9 2-11.5M9 6.5l1-4h5l-.5 4");
}
</style><path class="lbaa-hb5p"/>`,
		"fallback": "uix:tip-jar",
	});
}

export default Component;

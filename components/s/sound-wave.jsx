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
		"content": `<style>.kz_0qisdf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.25c1.5-6 3.5-6 4.75 0s3.25 6 4.75 0s3.5-6 4.75 0s3.25 6 4.75 0M3 18.25h18M18.75 16L21 18.25l-2.25 2.25");
}
</style><path class="kz_0qisdf"/>`,
		"fallback": "uix:sound-wave",
	});
}

export default Component;

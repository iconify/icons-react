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
		"content": `<style>.i9vwsehnt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 4.25a4 4 0 0 1 4.5 0m1.75 3a4 4 0 0 1-2.25 4m-3.5 0a4 4 0 0 1-2.25-4m-3 14.25q0-3 1.5-4.5m2.5-1.75c1.75-.75 4.25-.75 6 0m3.602 3.557q.398 1.148.398 2.693M17 16a2.25 2.25 0 1 1 2.25 2.25V19m0 2.75h.01");
}
</style><path class="i9vwsehnt"/>`,
		"fallback": "uix-sharp:missing-person",
	});
}

export default Component;

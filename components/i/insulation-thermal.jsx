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
		"content": `<style>.d_y0e28co {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.125 2.5h1.75A2.625 2.625 0 0 1 19.5 5.125v13.75a2.625 2.625 0 0 1-2.625 2.625h-1.75a2.625 2.625 0 0 1-2.625-2.625V5.125A2.625 2.625 0 0 1 15.125 2.5m.875 0v19M2.5 7Q4.25 5.5 6 7t3.5 0m-7 5q1.75-1.5 3.5 0t3.5 0m-7 5q1.75-1.5 3.5 0t3.5 0");
}
</style><path class="d_y0e28co"/>`,
		"fallback": "uix:insulation-thermal",
	});
}

export default Component;

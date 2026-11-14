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
		"content": `<style>.kqu27rbvu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 2.5h13m-13 19h9.9M5 2.5v4L8.5 12L5 17.5v4m10-19v4L11.5 12l1.708 2.684M14.25 18c1.75-3.25 6-3.25 7.75 0c-1.75 3.25-6 3.25-7.75 0ZM18 18h.01");
}
</style><path class="kqu27rbvu"/>`,
		"fallback": "uix-sharp:mean-time-to-detect",
	});
}

export default Component;

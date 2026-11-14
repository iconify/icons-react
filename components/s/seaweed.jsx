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
		"content": `<style>.stobvb-cv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 21c-2-3.5 2-6 0-9.5S9 6 7.5 3m5 18c-2-4 2-7 0-11c-1.5-3 1-4.5 0-5m5 16c-2-3 2-5 0-8c-1.5-2 1-3.5.5-4.5M3 21h18");
}
</style><path class="stobvb-cv"/>`,
		"fallback": "uix-sharp:seaweed",
	});
}

export default Component;

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
		"content": `<style>.wxro-6euu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 10c0-5.5 4-7.5 9-7.5s9 2 9 7.5q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0q-2.25-1.5-4.5 0Q5.25 8.5 3 10Zm0 0l6.75 6.5L7.5 10M21 10l-6.75 6.5L16.5 10m-6.75 6.5h4.5v5h-4.5Z");
}
</style><path class="wxro-6euu"/>`,
		"fallback": "uix-sharp:skydiver",
	});
}

export default Component;

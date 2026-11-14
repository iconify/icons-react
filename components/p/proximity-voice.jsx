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
		"content": `<style>.i568xd1wi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7.5h6a2 2 0 0 1 2 2V13a2 2 0 0 1-2 2h-3.5L9 17.25V15a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2ZM21.25 10a9.5 9.5 0 0 1 0 4M20 17a9.5 9.5 0 0 1-3 3m-3 1.25a9.5 9.5 0 0 1-4 0M7 20a9.5 9.5 0 0 1-3-3m-1.25-3a9.5 9.5 0 0 1 0-4M4 7a9.5 9.5 0 0 1 3-3m3-1.25a9.5 9.5 0 0 1 4 0M17 4a9.5 9.5 0 0 1 3 3");
}
</style><path class="i568xd1wi"/>`,
		"fallback": "uix-sharp:proximity-voice",
	});
}

export default Component;

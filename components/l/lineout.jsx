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
		"content": `<style>.ifkyonktz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 4.75a3.5 2.25 0 1 0 7 0a3.5 2.25 0 1 0-7 0ZM2.75 12a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-.25 9.5v-2A2.5 2.5 0 0 1 5 17h3.5l1.75-7.25m7 2.25a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm4.25 9.5v-2A2.5 2.5 0 0 0 19 17h-3.5l-1.75-7.25");
}
</style><path class="ifkyonktz"/>`,
		"fallback": "uix-sharp:lineout",
	});
}

export default Component;

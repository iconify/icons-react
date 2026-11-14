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
		"content": `<style>.qds-mac1s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 13a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM3 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm13 1a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM15.75 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-6.5-8.25L6.25 7m7 4l3.25-2.75M13.25 15l3 2.75");
}
</style><path class="qds-mac1s"/>`,
		"fallback": "uix-sharp:molecule-model",
	});
}

export default Component;

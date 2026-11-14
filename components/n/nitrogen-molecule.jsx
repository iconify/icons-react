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
		"content": `<style>.xe8qpsbii {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 17a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Zm10-10a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM10 14l4-4");
}
</style><path class="xe8qpsbii"/>`,
		"fallback": "uix-sharp:nitrogen-molecule",
	});
}

export default Component;

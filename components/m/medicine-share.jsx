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
		"content": `<style>.sm-icjber {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm-1 7h6m5.75-6a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0Zm0 12a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM9.5 9.5l6-2.5m-6 7.5l6 2.5");
}
</style><path class="sm-icjber"/>`,
		"fallback": "uix-sharp:medicine-share",
	});
}

export default Component;

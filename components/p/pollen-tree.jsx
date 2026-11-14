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
		"content": `<style>.bamfbmyic {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 9a6 6 0 1 0 12 0A6 6 0 1 0 4 9Zm6 6v6m9-15h.01m1.49 4.5h.01m-1.51 4h.01");
}
</style><path class="bamfbmyic"/>`,
		"fallback": "uix-sharp:pollen-tree",
	});
}

export default Component;

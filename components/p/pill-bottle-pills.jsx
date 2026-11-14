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
		"content": `<style>.oftu-cb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 4h6.5l3 2.5h3v3h-3l-3 2.5H4a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 4 4Zm14.25 9.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-2.25 6a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0ZM9.75 19a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="oftu-cb7p"/>`,
		"fallback": "uix-sharp:pill-bottle-pills",
	});
}

export default Component;

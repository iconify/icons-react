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
		"content": `<style>.ya0polb7p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 19.5c0-2.8 2.5-4.75 5.5-4.75s5.5 1.95 5.5 4.75c0 .5-.4 1-1 1h-9c-.6 0-1-.5-1-1ZM9 7.25a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM2.5 9a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2 17.5c0-1.9 1.2-3 2.5-3.25M22 17.5c0-1.9-1.2-3-2.5-3.25");
}
</style><path class="ya0polb7p"/>`,
		"fallback": "uix-sharp:security-team",
	});
}

export default Component;

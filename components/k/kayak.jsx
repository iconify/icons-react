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
		"content": `<style>.c6pqxybel {
  d: path("M3.5 20.5C8 12 12 8 20.5 3.5C16 12 12 16 3.5 20.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ws4oy3b7b {
  d: path("M10.25 12a1.75 3.25 0 1 0 3.5 0a1.75 3.25 0 1 0-3.5 0Z");
}
</style><g class="ulnmmdpxh"><path class="c6pqxybel"/><path class="ws4oy3b7b"/></g>`,
		"fallback": "uix-sharp:kayak",
	});
}

export default Component;

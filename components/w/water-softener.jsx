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
		"content": `<style>.mdqjx-buk {
  d: path("M3.5 9a4.5 1.5 0 0 1 9 0v11a4.5 1.5 0 0 1-9 0Z");
}

.nx4-60a8w {
  d: path("M5.5 5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-2 4a4.5 1.5 0 0 0 9 0m0 8.5h7m0-2v4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="mdqjx-buk"/><path class="nx4-60a8w"/></g>`,
		"fallback": "uix-sharp:water-softener",
	});
}

export default Component;

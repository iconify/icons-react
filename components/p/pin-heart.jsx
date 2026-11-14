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
		"content": `<style>.mdxznf-ts {
  d: path("M7 8.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM18 21s-3.25-2-3.25-4.25c0-1 .75-1.75 1.75-1.75c.75 0 1.25.5 1.5 1c.25-.5.75-1 1.5-1c1 0 1.75.75 1.75 1.75C21.25 19 18 21 18 21Z");
}

.szgbmkb4d {
  d: path("M9 19S3.5 14 3.5 8.5a5.5 5.5 0 0 1 11 0C14.5 14 9 19 9 19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="szgbmkb4d"/><path class="mdxznf-ts"/></g>`,
		"fallback": "uix-sharp:pin-heart",
	});
}

export default Component;

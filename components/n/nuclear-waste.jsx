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
		"content": `<style>.m8b1fnrea {
  d: path("M5 2.5h14v19H5ZM5 5h14M5 19h14");
}

.n7z6l8diy {
  d: path("M11.25 10.75L10 8.5a4 4 0 0 1 4 0l-1.25 2.25a1.5 1.5 0 0 0-1.5 0ZM13.5 12H16a4 4 0 0 1-2 3.5l-1.25-2.25A1.5 1.5 0 0 0 13.5 12Zm-2.25 1.25L10 15.5A4 4 0 0 1 8 12h2.5a1.5 1.5 0 0 0 .75 1.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m8b1fnrea"/><path class="n7z6l8diy"/></g>`,
		"fallback": "uix-sharp:nuclear-waste",
	});
}

export default Component;

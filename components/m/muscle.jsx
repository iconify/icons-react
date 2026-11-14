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
		"content": `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vvttmzbby {
  d: path("M5.5 14c2-.75 4-.5 5.5.5M6 17c2-.5 4-.25 5.5.75");
}

.zaprnqb7t {
  d: path("M2.5 20.5V15c0-3 2-4.75 5-4.75c2 0 3 .75 4 1.25l2-1.5l-.5-3.5c-.25-1.5.75-3 2.5-3h2c1.75 0 2.75 1.25 2.25 3l-1.5 5c-.75 3-1.75 5.5-4.25 7.25C12 20 9.5 20.5 7 20.5Z");
}
</style><g class="ulnmmdpxh"><path class="zaprnqb7t"/><path class="vvttmzbby"/></g>`,
		"fallback": "uix-sharp:muscle",
	});
}

export default Component;

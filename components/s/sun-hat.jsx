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
		"content": `<style>.akvfs44ao {
  d: path("M6 12c0-5 2.5-7 6-7s6 2 6 7Z");
}

.nbx010b8i {
  d: path("M2.5 13a9.5 3 0 1 0 19 0a9.5 3 0 1 0-19 0ZM6 10h12");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="akvfs44ao"/><path class="nbx010b8i"/></g>`,
		"fallback": "uix-sharp:sun-hat",
	});
}

export default Component;

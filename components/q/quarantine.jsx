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
		"content": `<style>.ce7e_ofiz {
  d: path("M14.25 14h7.5v3c0 2.5-1.5 4.25-3.75 5c-2.25-.75-3.75-2.5-3.75-5Z");
}

.dj8c07bjd {
  d: path("M11.723 19.5H2.5v-10l8.5-7l8.5 7v1.677");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dj8c07bjd"/><path class="ce7e_ofiz"/></g>`,
		"fallback": "uix-sharp:quarantine",
	});
}

export default Component;

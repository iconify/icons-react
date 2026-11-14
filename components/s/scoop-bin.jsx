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
		"content": `<style>.f2_cpgbgs {
  d: path("M2.5 10h15L16 21.5H4Zm0-2L4 2.5h7L10 8Zm.75 6h13.5");
}

.pb7u_ccsx {
  d: path("M6 14a2.5 2 0 0 0 5 0m0 0l8.5-7m-13 11h1m3 .5h1");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="f2_cpgbgs"/><path class="pb7u_ccsx"/></g>`,
		"fallback": "uix-sharp:scoop-bin",
	});
}

export default Component;

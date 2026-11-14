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
		"content": `<style>.k042c35rm {
  d: path("M5 7.5V5h16.5v8.6M5 16.5h.01M17 10h.01M6.25 13.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm3.5 0H15m-2.25 0v2m2 4.75h6.5c-1-1-1-1.75-1-2.75a2.25 2.25 0 0 0-4.5 0c0 1 0 1.75-1 2.75Zm2.5 1.75h1.5");
}

.tm4_7rb7l {
  d: path("M11.8 19H2.5V7.5h17v4.9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tm4_7rb7l"/><path class="k042c35rm"/></g>`,
		"fallback": "uix-sharp:rent-due",
	});
}

export default Component;

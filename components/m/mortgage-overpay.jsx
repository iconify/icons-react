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
		"content": `<style>.na12gss2b {
  d: path("M16 7V4h2v4.75M14.5 15l2.75 3l-2.75 3m3.5-6l2.75 3L18 21");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.znaulxbba {
  d: path("M11.16 20.5H4v-10l8-7l8 7v2.54");
}
</style><g class="ulnmmdpxh"><path class="znaulxbba"/><path class="na12gss2b"/></g>`,
		"fallback": "uix-sharp:mortgage-overpay",
	});
}

export default Component;

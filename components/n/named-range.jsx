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
		"content": `<style>.h2qmzccue {
  d: path("M14.5 14.5h3.75l3.5 3.5L18 21.75l-3.5-3.5Zm2.25 2.25h.01");
}

.t2cc_rbhh {
  d: path("M13.3 21H3V3h18v10.3M9 3v18m6-18v8.7M3 9h18M3 15h8.7");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t2cc_rbhh"/><path class="h2qmzccue"/></g>`,
		"fallback": "uix-sharp:named-range",
	});
}

export default Component;

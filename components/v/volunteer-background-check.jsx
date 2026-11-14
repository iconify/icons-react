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
		"content": `<style>.e4iwgccyk {
  d: path("M10.8 18H2.5V3.5h18v8.8");
}

.eeysahb4p {
  d: path("M6 8.25a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Zm-1 7a2.75 2.75 0 0 1 5.5 0M13 8.5h4.5M13 12h3m-1.25 6l2 2L21 15.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e4iwgccyk"/><path class="eeysahb4p"/></g>`,
		"fallback": "uix-sharp:volunteer-background-check",
	});
}

export default Component;

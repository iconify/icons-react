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
		"content": `<style>.qgf870bbm {
  d: path("M12.75 7.5h-3.5a1.75 1.75 0 0 0 0 3.5h2a1.75 1.75 0 0 1 0 3.5h-3.5m2.5-9V16M18 14.5q.75 2.75 3.5 3.5q-2.75.75-3.5 3.5q-.75-2.75-3.5-3.5q2.75-.75 3.5-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zu_h1sjqt {
  d: path("M13.755 19.663L12.5 20.5L10.25 19L8 20.5L5.75 19L3.5 20.5v-18H17v11.2");
}
</style><g class="ulnmmdpxh"><path class="zu_h1sjqt"/><path class="qgf870bbm"/></g>`,
		"fallback": "uix-sharp:invoice-ai",
	});
}

export default Component;

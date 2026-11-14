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
		"content": `<style>.q8n631b7b {
  d: path("M6.5 2.5h11v3h-11Zm1 3V7c-2 .5-3 2-3 4v8A2.5 2.5 0 0 0 7 21.5h10a2.5 2.5 0 0 0 2.5-2.5v-8c0-2-1-3.5-3-4V5.5M4.5 12h15");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y6mde9b3n {
  d: path("M8.5 16.75c1.5-2.25 4.5-2.25 6 0l1.5-1.5v3l-1.5-1.5C13 19 10 19 8.5 16.75Z");
}
</style><g class="ulnmmdpxh"><path class="q8n631b7b"/><path class="y6mde9b3n"/></g>`,
		"fallback": "uix-sharp:specimen-jar",
	});
}

export default Component;

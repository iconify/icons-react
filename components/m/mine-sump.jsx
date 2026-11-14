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
		"content": `<style>.atxkqdb3o {
  d: path("M6 14.5q3-2 6 0t6 0");
}

.q1b96s9zw {
  d: path("M2.5 5H6v14h12V5h3.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q1b96s9zw"/><path class="atxkqdb3o"/></g>`,
		"fallback": "uix-sharp:mine-sump",
	});
}

export default Component;

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
		"content": `<style>.u47nm8bzz {
  d: path("M15.235 13.383L10 16l-7-3.5V6l7-3.5L17 6v6.074");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yrsggbi8d {
  d: path("m3 6l7 3.5L17 6m-7 3.5V16M6.5 4.25l7 3.5M18 21v-6m-2.5 2.5L18 15l2.5 2.5");
}
</style><g class="ulnmmdpxh"><path class="u47nm8bzz"/><path class="yrsggbi8d"/></g>`,
		"fallback": "uix-sharp:package-publish",
	});
}

export default Component;

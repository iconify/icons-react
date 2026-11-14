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
		"content": `<style>.bhh6hy39e {
  d: path("M9.262 20.5H3v-9l5-3v3l5-3v3h3.5v-8h4v10.338M6.5 15.5h2m3 0h1.9");
}

.c0pksfm9q {
  d: path("m18.5 13.75l-3.75 4.5h3l-.5 3.5L21 17h-3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bhh6hy39e"/><path class="c0pksfm9q"/></g>`,
		"fallback": "uix-sharp:waste-to-energy",
	});
}

export default Component;

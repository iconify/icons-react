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
		"content": `<style>.kqzxbrvil {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 8.5h.01m2.24 2.25h.01M13 13h.01");
}

.rnpixqc6j {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.56 4.44l10.35 9.65q.88.88 4.14 2.36q-.3 4.3-4.6 4.6q-1.48-3.26-2.36-4.14L4.44 6.56L3.418 5.463l2.12-2.12zm-2.31-.19l-1.5-1.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rnpixqc6j"/><path class="kqzxbrvil"/></g>`,
		"fallback": "iconoven:shehnai-sharp",
	});
}

export default Component;

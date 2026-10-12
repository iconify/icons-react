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
		"content": `<style>.ni03p4sii {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12.6 9.6h.01");
}

.nk1d7bc0e {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 20.5l.545.75h2.61l-.255-1.7l-1.75-14.8l-.261-2H14v2.4c0 2.35-2.05 3.6-3.9 5c-1.75 1.35-3.35 2.6-3.35 4.85c0 2.3 1.95 3.75 4.25 3.75c2.35 0 4.25-1.4 4.25-3.6c0-2.1-1.75-3.3-3.6-3.3");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="nk1d7bc0e"/><path class="ni03p4sii"/></g>`,
		"fallback": "iconoven:treble-clef-sharp",
	});
}

export default Component;

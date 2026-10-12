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
		"content": `<style>.al12gft3b {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.75 4.75h.01");
}

.fo4_yacso {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m10.75 10.75l.75 1.5h1.75m1.5 8H18l1.75-1.75");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xhqtkiemx {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 5.5v-.75L7 4.5l2.25-.9l.708-.85h3.792v5c1.25 2 1.75 4.5 1.75 7.25q0 3-.75 5.25h-5.5c-.5-1.75-.75-3.75-.75-5.75c0-2.25.5-4.25 1.25-6L7 6.5l-.75-.167z");
}
</style><g class="ux2u0rbkq"><path class="xhqtkiemx"/><path class="fo4_yacso"/><path class="al12gft3b"/></g>`,
		"fallback": "iconoven:meerkat-sharp",
	});
}

export default Component;

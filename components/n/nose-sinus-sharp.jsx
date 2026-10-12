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
		"content": `<style>.kvc7j1bsi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 2.75c0 4.5-1 7.75-3.5 11c-1.25 1.75-.25 4.75 2 4.75h6c2.25 0 3.25-3 2-4.75c-2.5-3.25-3.5-6.5-3.5-11");
}

.prc1ybcum {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75a1.75 2.5 0 0 1 3.5 0v1.5a1.75 2.5 0 0 1-3.5 0Zm15 0a1.75 2.5 0 0 1 3.5 0v1.5a1.75 2.5 0 0 1-3.5 0Z");
}

.qqimkdb8a {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 16h.01M14 16h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="kvc7j1bsi"/><path class="qqimkdb8a"/><path class="prc1ybcum"/></g>`,
		"fallback": "iconoven:nose-sinus-sharp",
	});
}

export default Component;

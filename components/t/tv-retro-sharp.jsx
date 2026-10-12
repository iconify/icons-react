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
		"content": `<style>.bt3v7mf2q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 6.75h9.5v9.5h-9.5z");
}

.o122blbig {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.75h18.5v15.5H2.75z");
}

.t-g_mhbss {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.25 8.75h.01m-.01 4h.01");
}

.tcdjnulzv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 19.25v2m11.5-2v2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="o122blbig"/><path class="bt3v7mf2q"/><path class="t-g_mhbss"/><path class="tcdjnulzv"/></g>`,
		"fallback": "iconoven:tv-retro-sharp",
	});
}

export default Component;

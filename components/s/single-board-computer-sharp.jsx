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
		"content": `<style>.bkc9cjaff {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.25h18.5v15.5H2.75z");
}

.mfjc_kq7a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11h5.5v5.5h-5.5zm9 1.25h2.5m-2.5 3h2.5");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.v8g1hmbbw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 7.5h.01m2.74 0h.01m2.74 0h.01m2.74 0h.01m2.74 0h.01");
}
</style><g class="ux2u0rbkq"><path class="bkc9cjaff"/><path class="v8g1hmbbw"/><path class="mfjc_kq7a"/></g>`,
		"fallback": "iconoven:single-board-computer-sharp",
	});
}

export default Component;

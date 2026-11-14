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
		"content": `<style>.heagg9bky {
  d: path("m2.5 11l9.5 6l9.5-6");
}

.i45girxkv {
  d: path("M2.5 11v8.5A1.5 1.5 0 0 0 4 21h16a1.5 1.5 0 0 0 1.5-1.5V11");
}

.mzzxl9bnc {
  d: path("M5.5 13V4.5A1.5 1.5 0 0 1 7 3h10a1.5 1.5 0 0 1 1.5 1.5V13");
}

.oyr5e9bfe {
  d: path("m9 8l2 2l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i45girxkv"/><path class="heagg9bky"/><path class="mzzxl9bnc"/><path class="oyr5e9bfe"/></g>`,
		"fallback": "uix-sharp:job-offer-accepted",
	});
}

export default Component;

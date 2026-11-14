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
		"content": `<style>.bz-ep-b_k {
  d: path("M10.5 8.25h3v4h-3Zm0 7.25l3 1m4-7.25l2-.75m-2 4.25l2-.75");
}

.tvxzvze-f {
  d: path("m2.5 5.5l6-2.5l7 2.5l6-2.5v15.5l-6 2.5l-7-2.5l-6 2.5Zm6-2.5v15.5m7-13V21M4.5 9.25l2-.75m-2 4.25l2-.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="tvxzvze-f"/><path class="bz-ep-b_k"/></g>`,
		"fallback": "uix-sharp:promo-leaflet",
	});
}

export default Component;

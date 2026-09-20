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
		"content": `<style>.cfd43lbgp {
  d: path("M7 13h10");
}

.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.g7cpaab_q {
  d: path("m6 9 3 -3 3 3 2 -2 2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.szshe-6ah {
  d: path("M7 17h10");
}
</style><g class="hntgybcog"><path class="d5czi6rdr"/><path class="g7cpaab_q"/><path class="cfd43lbgp"/><path class="szshe-6ah"/></g>`,
		"fallback": "iconmind:product-listing-outline-thin",
	});
}

export default Component;

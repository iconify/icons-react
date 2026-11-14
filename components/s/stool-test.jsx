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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n4z0mdbod {
  d: path("M9.375 9.5h5.25A4.375 4.375 0 0 1 19 13.875v3.25a4.375 4.375 0 0 1-4.375 4.375h-5.25A4.375 4.375 0 0 1 5 17.125v-3.25A4.375 4.375 0 0 1 9.375 9.5m-3.125-5h11.5a1.75 1.75 0 0 1 1.75 1.75v1.5a1.75 1.75 0 0 1-1.75 1.75H6.25A1.75 1.75 0 0 1 4.5 7.75v-1.5A1.75 1.75 0 0 1 6.25 4.5M8 4.5v5m4-5v5m4-5v5m-4 0V15");
}

.zzgg51bqa {
  d: path("M10.5 17a1.5 2 0 1 0 3 0a1.5 2 0 1 0-3 0");
}
</style><g class="hntgybcog"><path class="n4z0mdbod"/><path class="zzgg51bqa"/></g>`,
		"fallback": "uix:stool-test",
	});
}

export default Component;

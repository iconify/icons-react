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
		"content": `<style>.b1giyo3pl {
  d: path("M6.875 2.5h10.25A4.375 4.375 0 0 1 21.5 6.875v10.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 17.125V6.875A4.375 4.375 0 0 1 6.875 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.n9bh7bbrt {
  d: path("M5.5 12V6.5a1 1 0 0 1 1-1H12m-3.25 9.75v-5.5a1 1 0 0 1 1-1h5.5M13.75 12h3a1.75 1.75 0 0 1 1.75 1.75v3a1.75 1.75 0 0 1-1.75 1.75h-3A1.75 1.75 0 0 1 12 16.75v-3A1.75 1.75 0 0 1 13.75 12");
}
</style><g class="hntgybcog"><path class="b1giyo3pl"/><path class="n9bh7bbrt"/></g>`,
		"fallback": "uix:material-board",
	});
}

export default Component;

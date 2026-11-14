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
		"content": `<style>.qp2iq3piv {
  d: path("M4 10.5a8 8 0 1 0 16 0a8 8 0 1 0-16 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x_qt-3bth {
  d: path("M4 10.5v3a8 8 0 0 0 16 0v-3m-16 0h16");
}
</style><g class="ulnmmdpxh"><path class="qp2iq3piv"/><path class="x_qt-3bth"/></g>`,
		"fallback": "uix-sharp:pill-scored",
	});
}

export default Component;

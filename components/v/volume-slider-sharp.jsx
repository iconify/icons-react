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
		"content": `<style>.a3xsjrbpo {
  cx: 14.25px;
  cy: 18.5px;
  r: 2.25px;
}

.t5ggh0buu {
  d: path("M7.25 6.5v-.9h2.22l2.64-2.22l.942-.843L13.01 3.8v8.4l.042 1.263l-.942-.843l-2.64-2.22H7.25v-.9ZM16 6l1.789 2L16 10M3.75 18.5H12m4.5 0h3.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t5ggh0buu"/><circle class="a3xsjrbpo"/></g>`,
		"fallback": "iconoven:volume-slider-sharp",
	});
}

export default Component;

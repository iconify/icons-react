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
		"content": `<style>.l6-jpkbcr {
  d: path("m6 10.75l3.65 2.75L11 14.512l1.35-1.012L16 10.75M15.75 5h4.75m-2-2.25L20.75 5L18.5 7.25");
}

.t0c9a54sn {
  d: path("M2.75 7.25h14.5v12H2.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="t0c9a54sn"/><path class="l6-jpkbcr"/></g>`,
		"fallback": "iconoven:mail-send-sharp",
	});
}

export default Component;

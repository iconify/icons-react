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
		"content": `<style>.exhvd4buv {
  d: path("M6.25 9.75v-3.5h3.5");
}

.qgu-83b5u {
  d: path("M9.75 2.75a7 7 0 1 1 0 14a7 7 0 1 1 0-14m7.69 12.04l2.47 2.47l1.24 1.24l-1.24 1.24l-.17.17l-1.24 1.24l-1.24-1.24l-2.47-2.47l-1.24-1.24l1.24-1.24l.17-.17l1.24-1.24z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="qgu-83b5u"/><path class="exhvd4buv"/></g>`,
		"fallback": "iconoven:magnifier-glass-sharp",
	});
}

export default Component;

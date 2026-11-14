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
		"content": `<style>.h5ffsbcbr {
  d: path("M8.5 4.5h11v15h-11l-5-7.5ZM8.25 12h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3pbp1bzi {
  d: path("M11.25 16c0-4.5 1.25-7 5.25-8.25C16.75 12 15 15 11.25 16Zm0 0L14 11.5");
}
</style><g class="ulnmmdpxh"><path class="h5ffsbcbr"/><path class="w3pbp1bzi"/></g>`,
		"fallback": "uix-sharp:renewable-badge",
	});
}

export default Component;

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
		"content": `<style>.l0oo9-bdv {
  d: path("M14 7.75a2.75 2.75 0 1 0 0 4.5a2.25 2.25 0 0 1 0-4.5ZM8 16.5h.01m3.99 0h.01m3.99 0h.01");
}

.okj1k4bkq {
  d: path("M3 4h18v17H3Zm5-1.5V6m8-3.5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="okj1k4bkq"/><path class="l0oo9-bdv"/></g>`,
		"fallback": "uix-sharp:lunar-calendar",
	});
}

export default Component;

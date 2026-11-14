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
		"content": `<style>.i5j_hzblv {
  d: path("M3 4.5h18v15H3Zm3 3h.01M18 7.5h.01M6 16.5h.01m11.99 0h.01");
}

.tmxz9fb7t {
  d: path("M9.5 9H13l-2.5 6M15 9v6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="i5j_hzblv"/><path class="tmxz9fb7t"/></g>`,
		"fallback": "uix-sharp:race-bib",
	});
}

export default Component;

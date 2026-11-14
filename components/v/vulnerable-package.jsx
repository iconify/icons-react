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
		"content": `<style>.lj49l8biv {
  d: path("M3.5 6L10 9.5L16.5 6M10 9.5v7m8-1.75v3.5M18 21h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ynda_kb6k {
  d: path("M10 2.5L16.5 6v7L10 16.5L3.5 13V6Z");
}
</style><g class="ulnmmdpxh"><path class="ynda_kb6k"/><path class="lj49l8biv"/></g>`,
		"fallback": "uix-sharp:vulnerable-package",
	});
}

export default Component;

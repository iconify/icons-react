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
		"content": `<style>.qpdspyblc {
  d: path("M3 2.5h18v17H3Z");
}

.u-jpr9b_s {
  d: path("M6.5 11a4 4 0 1 0 8 0a4 4 0 1 0-8 0Zm4 0h.01m6.99-3v6m-11 5.5v2m11-2v2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qpdspyblc"/><path class="u-jpr9b_s"/></g>`,
		"fallback": "uix-sharp:safe-vault",
	});
}

export default Component;

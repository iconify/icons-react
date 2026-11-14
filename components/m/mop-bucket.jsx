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
		"content": `<style>.c9_k57e9e {
  d: path("M5.75 11.25c1.75-1 3.75-1 5.75 0s4 1 6.25-.25");
}

.qh23r5lmi {
  d: path("M4 8h16l-1.5 11h-13Zm1 0a7 5 0 0 1 14 0M6.5 20.5a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Zm8.5 0a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="qh23r5lmi"/><path class="c9_k57e9e"/></g>`,
		"fallback": "uix-sharp:mop-bucket",
	});
}

export default Component;

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
		"content": `<style>.il-rnqb5b {
  d: path("M2.25 12a9.75 9.75 0 1 0 19.5 0a9.75 9.75 0 1 0-19.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ww8j0_oru {
  d: path("M10.25 8h-3.5v3.5h1.5a2.25 2.25 0 0 1 0 4.5H6.5m6.75-8h4.5v8h-4.5Z");
}
</style><g class="ulnmmdpxh"><path class="il-rnqb5b"/><path class="ww8j0_oru"/></g>`,
		"fallback": "uix-sharp:speed-limit-sign",
	});
}

export default Component;

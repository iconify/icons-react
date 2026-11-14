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
		"content": `<style>.cx-2nrb8k {
  d: path("M5 7.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm10 6l6-3v10l-6-3Zm-6.5-6h.01");
}

.pudd2b9yu {
  d: path("M3 11h12v9H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="pudd2b9yu"/><path class="cx-2nrb8k"/></g>`,
		"fallback": "uix-sharp:mode-video",
	});
}

export default Component;

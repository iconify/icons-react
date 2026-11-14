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
		"content": `<style>.g0n8-nvma {
  d: path("M2.5 16.5V7A1.5 1.5 0 0 1 4 5.5h11l6.5 5.5v5.5Z");
}

.gvb1kdc1x {
  d: path("M15 5.5V11h6.5M5.75 11a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g0n8-nvma"/><path class="gvb1kdc1x"/></g>`,
		"fallback": "uix-sharp:laundry-van",
	});
}

export default Component;

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
		"content": `<style>.g8rzccb3e {
  d: path("M5.5 10H8v2.5H5.5Zm4 0H12v2.5H9.5Zm4 0H16v2.5h-2.5Zm4 0H20v2.5h-2.5Zm-12 4.5H20M3.75 12h.01");
}

.rhf_fek-r {
  d: path("M2 7.5h20v9H2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rhf_fek-r"/><path class="g8rzccb3e"/></g>`,
		"fallback": "uix-sharp:patch-panel",
	});
}

export default Component;

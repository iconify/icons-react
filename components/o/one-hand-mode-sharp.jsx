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
		"content": `<style>.fsrhlacof {
  d: path("M5.75 11h12.5v10.25H5.75zM12 5.25v3.5M10.25 7L12 8.75L13.75 7");
}

.m6dc86yhg {
  d: path("M5.75 12.5V2.75h12.5v9.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="m6dc86yhg"/><path class="fsrhlacof"/></g>`,
		"fallback": "iconoven:one-hand-mode-sharp",
	});
}

export default Component;

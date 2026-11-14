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
		"content": `<style>.iuj327r_p {
  d: path("M3.5 8h17l-1 13.5h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xuin6t60b {
  d: path("M8.5 11V6a3.5 3.5 0 0 1 7 0v5");
}
</style><g class="ulnmmdpxh"><path class="iuj327r_p"/><path class="xuin6t60b"/></g>`,
		"fallback": "uix-sharp:tote-bag",
	});
}

export default Component;

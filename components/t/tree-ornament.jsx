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
		"content": `<style>.nsi6t9b_m {
  fill: currentColor;
  d: path("M10.25 13.5a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vica_mbcq {
  d: path("m12 2.5l4.5 7h-2l5 8h-15l5-8h-2Zm0 15v4");
}
</style><g class="ulnmmdpxh"><path class="vica_mbcq"/><path class="nsi6t9b_m"/></g>`,
		"fallback": "uix-sharp:tree-ornament",
	});
}

export default Component;

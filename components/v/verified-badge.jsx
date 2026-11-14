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
		"content": `<style>.ej1j-pbfb {
  d: path("M19.5 12a3 3 0 0 1-2.25 5.25A3 3 0 0 1 12 19.5a3 3 0 0 1-5.25-2.25A3 3 0 0 1 4.5 12a3 3 0 0 1 2.25-5.25A3 3 0 0 1 12 4.5a3 3 0 0 1 5.25 2.25A3 3 0 0 1 19.5 12Z");
}

.l97qpbbsj {
  d: path("m9 12l2 2l4-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ej1j-pbfb"/><path class="l97qpbbsj"/></g>`,
		"fallback": "uix-sharp:verified-badge",
	});
}

export default Component;

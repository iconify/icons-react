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
		"content": `<style>.fe_8vhw0j {
  d: path("M5.75 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0Zm4.75-3.5v7m2.5-7v7m2.5-7v7m2.5-7v7");
}

.q8ovzjbcc {
  d: path("M7.5 5h12c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2h-12l-5-7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q8ovzjbcc"/><path class="fe_8vhw0j"/></g>`,
		"fallback": "uix-sharp:specimen-label",
	});
}

export default Component;

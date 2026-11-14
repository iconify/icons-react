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
		"content": `<style>.dlgecubqc {
  d: path("M4.5 21.5v-17a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v17l-2.5-1l-2.5 1l-2.5-1l-2.5 1l-2.5-1Z");
}

.ptoiry4ta {
  d: path("m7.5 8.25l2.5-2.5l2.5 2.5v2.25h-5V8.25m0 4.75h9M11 15.5h5.5M11 18h5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dlgecubqc"/><path class="ptoiry4ta"/></g>`,
		"fallback": "uix-sharp:property-tax-bill",
	});
}

export default Component;

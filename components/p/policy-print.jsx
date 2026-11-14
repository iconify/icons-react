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
		"content": `<style>.nt4po3bdm {
  d: path("M4 9.5h16v8H4Zm3 0v-6h10v6");
}

.q-haombgm {
  d: path("M7 14h10v6.5H7Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nt4po3bdm"/><path class="q-haombgm"/></g>`,
		"fallback": "uix-sharp:policy-print",
	});
}

export default Component;

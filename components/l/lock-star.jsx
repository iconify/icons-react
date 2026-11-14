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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qtqvz_xwj {
  d: path("m12.441 13.393l.092.186a1.5 1.5 0 0 0 1.129.821l.205.03a.492.492 0 0 1 .273.838l-.149.145a1.5 1.5 0 0 0-.431 1.328l.035.204a.492.492 0 0 1-.713.519l-.184-.097a1.5 1.5 0 0 0-1.396 0l-.184.097a.492.492 0 0 1-.713-.519l.035-.204a1.5 1.5 0 0 0-.431-1.328l-.149-.145a.492.492 0 0 1 .273-.838l.205-.03a1.5 1.5 0 0 0 1.129-.821l.092-.186a.492.492 0 0 1 .882 0");
}

.u34nf7zvd {
  d: path("M8.875 10h6.25a4.375 4.375 0 0 1 4.375 4.375v2.25A4.375 4.375 0 0 1 15.125 21h-6.25A4.375 4.375 0 0 1 4.5 16.625v-2.25A4.375 4.375 0 0 1 8.875 10M8 10V7a4 4 0 0 1 8 0v3");
}
</style><g class="hntgybcog"><path class="u34nf7zvd"/><path class="qtqvz_xwj"/></g>`,
		"fallback": "uix:lock-star",
	});
}

export default Component;

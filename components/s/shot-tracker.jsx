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
		"content": `<style>.ejire6h8x {
  d: path("M6.5 10a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm3.5 0h.01m9.49 4.5a10.5 10.5 0 0 1-5 5m7.25-2.75a13.5 13.5 0 0 1-5 5");
}

.n_l0ngbny {
  d: path("M2.5 10a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="n_l0ngbny"/><path class="ejire6h8x"/></g>`,
		"fallback": "uix-sharp:shot-tracker",
	});
}

export default Component;

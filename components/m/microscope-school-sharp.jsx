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
		"content": `<style>.b75m7v3tb {
  d: path("m12.6 12.75l.8 1.5m.1-7.35c3 .6 5.25 3.1 5.25 6.35c0 2.6-1.4 4.6-3.5 5.6v2.4m-10.5 0h14.5M6.75 16.5h8");
}

.gs8l32i_e {
  d: path("m10.44 4.16l3.44 5.55l.53.85l-.85.53l-2.12 1.32l-.85.53l-.53-.85l-3.44-5.55l-.53-.85l.85-.53l2.12-1.32l.85-.53z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="gs8l32i_e"/><path class="b75m7v3tb"/></g>`,
		"fallback": "iconoven:microscope-school-sharp",
	});
}

export default Component;

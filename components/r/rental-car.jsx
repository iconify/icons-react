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
		"content": `<style>.g9_whrboq {
  d: path("M5 18a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0Zm11 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0ZM5 11l2-4h5l1 4");
}

.ita0dsbvn {
  d: path("M2.5 17v-6H13l3 3h5v3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ita0dsbvn"/><path class="g9_whrboq"/></g>`,
		"fallback": "uix-sharp:rental-car",
	});
}

export default Component;

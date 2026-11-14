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
		"content": `<style>.d-iwsxb2f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.875 6.5h10.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375H6.875A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5M6.5 12h4m3 0h4");
}
</style><path class="d-iwsxb2f"/>`,
		"fallback": "uix:license-plate",
	});
}

export default Component;

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
		"content": `<style>.odtisfvkt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.125 12.5h13.75a2.625 2.625 0 0 1 2.625 2.625v2.25A2.625 2.625 0 0 1 18.875 20H5.125A2.625 2.625 0 0 1 2.5 17.375v-2.25A2.625 2.625 0 0 1 5.125 12.5M4 12.5l14.5-8M6 16.25h12");
}
</style><path class="odtisfvkt"/>`,
		"fallback": "uix:scanner",
	});
}

export default Component;

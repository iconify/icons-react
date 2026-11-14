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
		"content": `<style>.g_vybab1n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.25 7a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM6 20c0-4 2.75-6.5 6-6.5s6 2.5 6 6.5M2.5 7.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-15 10c0-3 1.25-5 3.75-5.25M21.5 17.5c0-3-1.25-5-3.75-5.25");
}
</style><path class="g_vybab1n"/>`,
		"fallback": "uix-sharp:map-layer-crowds",
	});
}

export default Component;

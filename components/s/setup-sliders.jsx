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
		"content": `<style>.zw8metbxo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 4.5h10.25m4.5 0h4.25M2.5 12h3.25m4.5 0H21.5m-19 7.5h12.25m4.5 0h2.25m-8.75-15a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm-7 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Zm9 7.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0Z");
}
</style><path class="zw8metbxo"/>`,
		"fallback": "uix-sharp:setup-sliders",
	});
}

export default Component;

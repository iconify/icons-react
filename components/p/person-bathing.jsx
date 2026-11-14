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
		"content": `<style>.egggzp--u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v2a4 4 0 0 1-4 4h-11a4 4 0 0 1-4-4Zm4 6l-1 2m12-2l1 2M6.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM4.5 13c0-2 2-3 4.5-3s4.5 1 4.5 3");
}
</style><path class="egggzp--u"/>`,
		"fallback": "uix-sharp:person-bathing",
	});
}

export default Component;

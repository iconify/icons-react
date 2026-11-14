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
		"content": `<style>.vcq9febhf {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5h16V6H4ZM4 18h16v3.5H4ZM6.5 6v12m11-12v12m-8-6h5");
}
</style><path class="vcq9febhf"/>`,
		"fallback": "uix-sharp:papyrus-scroll",
	});
}

export default Component;

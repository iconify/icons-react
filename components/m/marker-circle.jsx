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
		"content": `<style>.dhhti4bet {
  d: path("M4.5 9.75a7.5 7.5 0 1 0 15 0a7.5 7.5 0 1 0-15 0Zm7.5 7.5v4.25");
}

.e_4ldpbjh {
  fill: currentColor;
  d: path("M9.5 9.75a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="dhhti4bet"/><path class="e_4ldpbjh"/></g>`,
		"fallback": "uix-sharp:marker-circle",
	});
}

export default Component;

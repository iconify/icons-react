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
		"content": `<style>.j3ev-7bin {
  d: path("M10.75 17a1.25 1.25 0 1 0 2.5 0a1.25 1.25 0 1 0-2.5 0ZM17 5h2.5M17 8.5h2.5");
}

.nuu_22bym {
  d: path("M9.5 13.75V5a2.5 2.5 0 0 1 5 0v8.75a4.25 4.25 0 1 1-5 0ZM12 8v7.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nuu_22bym"/><path class="j3ev-7bin"/></g>`,
		"fallback": "uix-sharp:thermometer-lab",
	});
}

export default Component;

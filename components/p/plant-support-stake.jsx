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
		"content": `<style>.imwimzbti {
  d: path("M10.25 11C7 11 4.5 9.5 4.5 7c3 0 5.5 1.5 5.75 4Zm.25-2c0-2.5 2-4.5 5-4.5c0 2.5-2 4.5-5 4.5Zm-1 7a5 1.75 0 1 0 10 0a5 1.75 0 1 0-10 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wmik5gbjg {
  d: path("M18.5 2.5v19m-8 0c0-4-.75-7.5 0-12.5");
}
</style><g class="ulnmmdpxh"><path class="wmik5gbjg"/><path class="imwimzbti"/></g>`,
		"fallback": "uix-sharp:plant-support-stake",
	});
}

export default Component;

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
		"content": `<style>.oy0yr-b2q {
  d: path("M4.5 3v18m0-17.5h15v10h-15Z");
}

.sfkmn992y {
  fill: currentColor;
  d: path("M9.5 3.5h5v5h-5Zm-5 5h5v5h-5Zm10 0h5v5h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oy0yr-b2q"/><path class="sfkmn992y"/></g>`,
		"fallback": "uix-sharp:navigation-end",
	});
}

export default Component;

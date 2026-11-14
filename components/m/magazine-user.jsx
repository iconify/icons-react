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
		"content": `<style>.erbzj5b3s {
  d: path("M9.75 11a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0ZM7.5 18.75C8 16.75 9.75 16 12 16s4 .75 4.5 2.75");
}

.gze7vobpe {
  d: path("M4.5 2.5h15v19h-15Zm3 3.25h9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="gze7vobpe"/><path class="erbzj5b3s"/></g>`,
		"fallback": "uix-sharp:magazine-user",
	});
}

export default Component;

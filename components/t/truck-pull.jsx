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
		"content": `<style>.kpbapvv0g {
  d: path("M4.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm10 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm5.5-4c1.5 1.5 1.5 5-.5 9");
}

.lwso0sbqi {
  d: path("M2.5 4h11v10h-11Zm11 3H17l3 3.5V14h-6.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="lwso0sbqi"/><path class="kpbapvv0g"/></g>`,
		"fallback": "uix-sharp:truck-pull",
	});
}

export default Component;

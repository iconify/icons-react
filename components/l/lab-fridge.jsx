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
		"content": `<style>.st5_6cb4i {
  d: path("M10.5 13v4a1.5 1.5 0 0 0 3 0v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z-r5ic1ya {
  d: path("M4.5 2.5h15v19h-15Zm0 7.5h15m-12-5v2.5");
}
</style><g class="ulnmmdpxh"><path class="z-r5ic1ya"/><path class="st5_6cb4i"/></g>`,
		"fallback": "uix-sharp:lab-fridge",
	});
}

export default Component;

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
		"content": `<style>.h12s2sstn {
  d: path("M8 14.25Q10.5 11 15 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z79145zym {
  d: path("M3 5.5q9 2.5 18 0q-2 6.5 0 13q-9-2.5-18 0q2-6.5 0-13Z");
}
</style><g class="ulnmmdpxh"><path class="z79145zym"/><path class="h12s2sstn"/></g>`,
		"fallback": "uix-sharp:silk-pillowcase",
	});
}

export default Component;

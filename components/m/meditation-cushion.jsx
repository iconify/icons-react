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
		"content": `<style>.bst7olbvr {
  d: path("M3 17h18c.75-6-3-9.5-9-9.5S2.25 11 3 17Z");
}

.o2e0w1bey {
  d: path("M6 13q6 1.75 12 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bst7olbvr"/><path class="o2e0w1bey"/></g>`,
		"fallback": "uix-sharp:meditation-cushion",
	});
}

export default Component;

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
		"content": `<style>.iw3vjjbpe {
  d: path("M3 9.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0Z");
}

.n0s37qbiu {
  d: path("M8 4.5h8a5 5 0 0 1 5 5v11h-8v-6H8m0-5h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iw3vjjbpe"/><path class="n0s37qbiu"/></g>`,
		"fallback": "uix-sharp:toilet-paper",
	});
}

export default Component;

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
		"content": `<style>.tpuy9wb5l {
  cx: 6.25px;
  cy: 17.5px;
  r: 3px;
}

.widwg6bmj {
  d: path("M9.25 17.5v-14L11 6.125l3.75.625M17 10q.51 3.74 4.25 4.25q-3.74.51-4.25 4.25q-.51-3.74-4.25-4.25Q16.49 13.74 17 10Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="tpuy9wb5l"/><path class="widwg6bmj"/></g>`,
		"fallback": "iconoven:music-gen-sharp",
	});
}

export default Component;

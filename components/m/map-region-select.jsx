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
		"content": `<style>.eoiz0rolg {
  d: path("m3 6l6-2.5L15 6l6-2.5V18l-6 2.5L9 18l-6 2.5Z");
}

.krg3l8v2l {
  d: path("M6.5 10.25v-2.5H9m6 0h2.5v2.5m0 3.5v2.5H15m-6 0H6.5v-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="eoiz0rolg"/><path class="krg3l8v2l"/></g>`,
		"fallback": "uix-sharp:map-region-select",
	});
}

export default Component;

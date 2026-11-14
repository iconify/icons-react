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
		"content": `<style>.run5ny8xc {
  d: path("m3 9l1.5-5h15L21 9M4.5 11v9h15v-9");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v2_2c-b2u {
  d: path("M3 9a3 3 0 0 0 6 0a3 3 0 0 0 6 0a3 3 0 0 0 6 0M10 20v-4.5h4V20M9 9l1-5m5 5l-1-5");
}
</style><g class="ulnmmdpxh"><path class="run5ny8xc"/><path class="v2_2c-b2u"/></g>`,
		"fallback": "uix-sharp:store-awning",
	});
}

export default Component;

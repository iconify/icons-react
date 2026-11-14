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
		"content": `<style>.r2cx5_i_e {
  d: path("M2.5 12a9.5 6.5 0 1 0 19 0a9.5 6.5 0 1 0-19 0Z");
}

.s1avswkyi {
  d: path("M6 12a6 3.5 0 1 0 12 0a6 3.5 0 1 0-12 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="r2cx5_i_e"/><path class="s1avswkyi"/></g>`,
		"fallback": "uix-sharp:round-rug",
	});
}

export default Component;

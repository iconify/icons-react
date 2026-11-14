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
		"content": `<style>.a0247acxd {
  d: path("m6.5 3.5l4 2v5l-4 2l-4-2v-5Zm11 8l4 2v5l-4 2l-4-2v-5Z");
}

.lcl_8gbre {
  d: path("m2.5 5.5l4 2l4-2m-4 2v5m7 1l4 2l4-2m-4 2v5m-7-11l3 5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="a0247acxd"/><path class="lcl_8gbre"/></g>`,
		"fallback": "uix-sharp:peer-dependency",
	});
}

export default Component;

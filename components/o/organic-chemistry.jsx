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
		"content": `<style>.dgieq0b_h {
  d: path("M8.25 14a3.75 3.75 0 1 0 7.5 0a3.75 3.75 0 1 0-7.5 0Z");
}

.oj3kt62im {
  d: path("m12 6.5l6.5 3.75v7.5L12 21.5l-6.5-3.75v-7.5Zm0 0v-4");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="oj3kt62im"/><path class="dgieq0b_h"/></g>`,
		"fallback": "uix-sharp:organic-chemistry",
	});
}

export default Component;

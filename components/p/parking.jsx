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
		"content": `<style>.hg3j289az {
  d: path("M5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13A2.5 2.5 0 0 1 5.5 3Zm3.75 14.5v-11");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w1h-m4b1d {
  d: path("M9.25 6.5h4a3.5 3.5 0 0 1 0 7h-4");
}
</style><g class="ulnmmdpxh"><path class="hg3j289az"/><path class="w1h-m4b1d"/></g>`,
		"fallback": "uix-sharp:parking",
	});
}

export default Component;

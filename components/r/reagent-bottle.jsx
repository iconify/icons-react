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
		"content": `<style>.e_t8r9b_a {
  d: path("M9.5 5.75V8.5H7c-1.1 0-2 .9-2 2v9c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-9c0-1.1-.9-2-2-2h-2.5V5.75m-6-3.25h7v3.25h-7Z");
}

.tbgb-73cc {
  d: path("m12 11.5l3.25 3.5L12 18.5L8.75 15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e_t8r9b_a"/><path class="tbgb-73cc"/></g>`,
		"fallback": "uix-sharp:reagent-bottle",
	});
}

export default Component;

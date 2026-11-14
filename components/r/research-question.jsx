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
		"content": `<style>.o-t82obge {
  d: path("M9 17.75v-1.5c-2.5-1.5-4-3.75-4-6.5a7 7 0 0 1 14 0c0 2.75-1.5 5-4 6.5v1.5Zm.5 3.5h5");
}

.q1xqbdbfb {
  d: path("M10 8.75a2 2 0 1 1 3 1.75c-.75.5-1 1-1 1.5m0 2.75h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="o-t82obge"/><path class="q1xqbdbfb"/></g>`,
		"fallback": "uix-sharp:research-question",
	});
}

export default Component;

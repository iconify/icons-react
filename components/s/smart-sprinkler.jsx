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
		"content": `<style>.bt7bxfb3f {
  d: path("M5 9q4.5-4.5 9.5 2m-.5 6a5.66 5.66 0 0 1 8 0m-6 2a2.83 2.83 0 0 1 4 0m-2 2h.01");
}

.g6jnqcxeg {
  d: path("M5 21.5v-9m-2 0h4V9H3ZM5 9q5-8.5 15.5-.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g6jnqcxeg"/><path class="bt7bxfb3f"/></g>`,
		"fallback": "uix-sharp:smart-sprinkler",
	});
}

export default Component;

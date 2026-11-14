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
		"content": `<style>.m1maa9b3f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 12.5h2.5l2.5-5c.75-1.25 2.75-1 2.75.75v3.25h2.75a1.75 1.75 0 0 1 1.75 2l-.75 6a2 2 0 0 1-2 2H9Zm2.5 0v9m-8.5-4v-9h3.5l2.5-5c.5-1.25 2.5-1 2.75.5");
}
</style><path class="m1maa9b3f"/>`,
		"fallback": "uix-sharp:thumbs-up-double",
	});
}

export default Component;

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
		"content": `<style>.t2-cuob0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 15.5v-10a2 2 0 0 1 4 0m2.5 10v-10a2 2 0 0 1 4 0m-10.5 5H11m-8.5 9q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0m-2.75-15a1.75 1.75 0 1 0 3.5 0a1.75 1.75 0 1 0-3.5 0Z");
}
</style><path class="t2-cuob0k"/>`,
		"fallback": "uix-sharp:lido",
	});
}

export default Component;

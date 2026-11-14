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
		"content": `<style>.x3oxo6r8h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 7a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM6.5 20v-1c0-3 2.5-5 5.5-5s5.5 2 5.5 5v1M2.25 9.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm15.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM2 18.5v-1c0-1.75.75-3 2.25-3.25M22 18.5v-1c0-1.75-.75-3-2.25-3.25");
}
</style><path class="x3oxo6r8h"/>`,
		"fallback": "uix-sharp:repo-contributors",
	});
}

export default Component;

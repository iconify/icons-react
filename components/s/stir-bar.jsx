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
		"content": `<style>.ykdh5lbpr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 9h14a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm5.5 0v6m3-6v6M6.536 5.489a8.5 8.5 0 0 1 10.928 0m0 13.022a8.5 8.5 0 0 1-10.928 0");
}
</style><path class="ykdh5lbpr"/>`,
		"fallback": "uix-sharp:stir-bar",
	});
}

export default Component;

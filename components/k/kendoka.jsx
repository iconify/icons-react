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
		"content": `<style>.o47tfzleg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 3h6a1 1 0 0 1 1 1v6.5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1ZM3 21.5v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3m-1.25-5.75L21 4.5M5 7.25h8");
}
</style><path class="o47tfzleg"/>`,
		"fallback": "uix-sharp:kendoka",
	});
}

export default Component;

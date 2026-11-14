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
		"content": `<style>.nkk8c7ath {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 8.5C5 4 19 4 21.5 8.5Zm9.5 0v13m-7-6h14m-11.5 0v6m9-6v6");
}
</style><path class="nkk8c7ath"/>`,
		"fallback": "uix-sharp:patio",
	});
}

export default Component;

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
		"content": `<style>.ecb1-bcxl {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 13H17a3.5 3.5 0 0 0 0-7A6 6 0 0 0 6.5 7a3 3 0 0 0 0 6Zm6.25 2.75L10.5 18.5h3l-2.25 3");
}
</style><path class="ecb1-bcxl"/>`,
		"fallback": "uix-sharp:risk-peril-storm",
	});
}

export default Component;

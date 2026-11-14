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
		"content": `<style>.nlqwh3xqy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 4.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0ZM12 9.75L11.5 14m-6-2.5l13-3m-11 11l4-5.5l4 3.5m-12 3l17-4.25");
}
</style><path class="nlqwh3xqy"/>`,
		"fallback": "uix-sharp:snowboarder",
	});
}

export default Component;

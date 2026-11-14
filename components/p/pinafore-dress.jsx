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
		"content": `<style>.h34sj8bjo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 7.5h7V12l4.5 9q-8 1.5-16 0l4.5-9Zm0 4.5h7m-7-4.5l-1-5m8 5l1-5");
}
</style><path class="h34sj8bjo"/>`,
		"fallback": "uix-sharp:pinafore-dress",
	});
}

export default Component;

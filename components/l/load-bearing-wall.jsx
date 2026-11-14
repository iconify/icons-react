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
		"content": `<style>.cvasytbir {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 11h16v10.5H4Zm0 4.5L8.5 11M4 20l9-9M7 21.5L17.5 11m-6 10.5L20 13m-4 8.5l4-4M7 2.5v6M5.5 7L7 8.5L8.5 7M12 2.5v6M10.5 7L12 8.5L13.5 7M17 2.5v6M15.5 7L17 8.5L18.5 7");
}
</style><path class="cvasytbir"/>`,
		"fallback": "uix-sharp:load-bearing-wall",
	});
}

export default Component;

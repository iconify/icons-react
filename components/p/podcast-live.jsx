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
		"content": `<style>.usc71lb-o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.5h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm2 10v9m-3.5 0h7M17.25 3a7 7 0 0 1 0 9M6.75 3a7 7 0 0 0 0 9M20.5 2.5a10 10 0 0 1 0 10m-17-10a10 10 0 0 0 0 10");
}
</style><path class="usc71lb-o"/>`,
		"fallback": "uix-sharp:podcast-live",
	});
}

export default Component;

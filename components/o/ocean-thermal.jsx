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
		"content": `<style>.k2id-e4gg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 15V4.5a1.5 1.5 0 0 1 3 0V15a3 3 0 1 1-3 0Zm-8-3q1-2 2 0t2 0m11 0q1-2 2 0t2 0m-19 5q1-2 2 0t2 0m11 0q1-2 2 0t2 0");
}
</style><path class="k2id-e4gg"/>`,
		"fallback": "uix-sharp:ocean-thermal",
	});
}

export default Component;

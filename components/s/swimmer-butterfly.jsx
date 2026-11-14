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
		"content": `<style>.ys7870boo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 10a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-1.5 3.5q-3.5-12-6-6m13 6q3.5-12 6-6M3 17q2.25-2 4.5 0t4.5 0t4.5 0t4.5 0");
}
</style><path class="ys7870boo"/>`,
		"fallback": "uix-sharp:swimmer-butterfly",
	});
}

export default Component;

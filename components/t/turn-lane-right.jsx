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
		"content": `<style>.n1lgyab6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 2.5v19m16-19v19m-10 0V11a3 3 0 0 1 3-3h3m-2.5-2.5L16 8l-2.5 2.5");
}
</style><path class="n1lgyab6z"/>`,
		"fallback": "uix-sharp:turn-lane-right",
	});
}

export default Component;

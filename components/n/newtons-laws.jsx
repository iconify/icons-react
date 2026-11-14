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
		"content": `<style>.h1_mv1b6z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11 7h10.5v10.5H11ZM2.5 17.5h19m-19-6h5.75M5.75 9l2.5 2.5l-2.5 2.5");
}
</style><path class="h1_mv1b6z"/>`,
		"fallback": "uix-sharp:newtons-laws",
	});
}

export default Component;

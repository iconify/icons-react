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
		"content": `<style>.ua2n02bxj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19M3 3v5m9-5L8.75 9.25M12 3l3.25 6.25M4.5 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm9 0a3 3 0 1 0 6 0a3 3 0 1 0-6 0ZM9 18.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Z");
}
</style><path class="ua2n02bxj"/>`,
		"fallback": "uix-sharp:pawn-shop",
	});
}

export default Component;

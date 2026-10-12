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
		"content": `<style>.dsyrnlbox {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 6.5q3.375-2.625 6.75 0t6.75 0l1.8-1.44l2.2.44m-1.5-2l2.5 2L19 7.75M2.75 12.5q3.375-2.625 6.75 0t6.75 0l1.8-1.44l2.2.44m-1.5-2l2.5 2L19 13.75M2.75 18.5q3.375-2.625 6.75 0t6.75 0l1.8-1.44l2.2.44m-1.5-2l2.5 2L19 19.75");
}
</style><path class="dsyrnlbox"/>`,
		"fallback": "iconoven:ocean-current-sharp",
	});
}

export default Component;

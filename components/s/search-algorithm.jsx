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
		"content": `<style>.bgipqgbbz {
  fill: currentColor;
  d: path("M9.75 17.5h4.5v4h-4.5Z");
}

.e0hu98b1s {
  d: path("M6.5 8a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0Zm9.5 4l2.75 2.75M2.5 17.5H7v4H2.5Z");
}

.ittrhdb3u {
  d: path("M17 17.5h4.5v4H17Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="e0hu98b1s"/><path class="bgipqgbbz"/><path class="ittrhdb3u"/></g>`,
		"fallback": "uix-sharp:search-algorithm",
	});
}

export default Component;

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
		"content": `<style>.bdnfiua1d {
  d: path("M8 3L2.5 6.5l2 4.5l2-1v11h11V10l2 1l2-4.5L16 3q-4 3-8 0Z");
}

.tjx3u2hcm {
  d: path("M9.25 12h5.5v3.75h-5.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="bdnfiua1d"/><path class="tjx3u2hcm"/></g>`,
		"fallback": "uix-sharp:shirt-name",
	});
}

export default Component;

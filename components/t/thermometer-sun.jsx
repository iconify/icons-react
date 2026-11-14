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
		"content": `<style>.gv1uqnb9t {
  d: path("M4.5 6.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm2-3.5V2m0 8v1M3 6.5H2m8 0h1M4 4l-.75-.75M9 4l.75-.75M4 9l-.75.75M9 9l.75.75");
}

.iqu0gdchd {
  d: path("M13.75 12.5v-7a3 3 0 0 1 6 0v7a5 5 0 1 1-6 0Z");
}

.r2s0bbc4c {
  fill: currentColor;
  d: path("M14.75 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="iqu0gdchd"/><path class="r2s0bbc4c"/><path class="gv1uqnb9t"/></g>`,
		"fallback": "uix-sharp:thermometer-sun",
	});
}

export default Component;

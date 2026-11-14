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
		"content": `<style>.ihz-mwroo {
  d: path("M2.75 14.25c.75 1.25 4.5.5 8.5-1.75C15.5 10 18 7 17.25 5.75M18.5 21.5l-2.75-3a1.875 1.875 0 0 1 2.75-2.25a1.875 1.875 0 0 1 2.75 2.25Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wl9vtghzh {
  d: path("M4 10a6 6 0 1 0 12 0a6 6 0 1 0-12 0Z");
}
</style><g class="ulnmmdpxh"><path class="wl9vtghzh"/><path class="ihz-mwroo"/></g>`,
		"fallback": "uix-sharp:planet-heart",
	});
}

export default Component;

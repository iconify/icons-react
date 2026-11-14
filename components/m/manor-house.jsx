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
		"content": `<style>.klewgmbgr {
  d: path("M4.5 9.75V4h3v3.25m9 0V4h3v5.75M10 21v-4a2 2 0 0 1 4 0v4");
}

.t-peadbli {
  d: path("m3 11l9-7.5l9 7.5v10H3Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="t-peadbli"/><path class="klewgmbgr"/></g>`,
		"fallback": "uix-sharp:manor-house",
	});
}

export default Component;

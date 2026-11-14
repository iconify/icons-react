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
		"content": `<style>.e1iu4jb7r {
  d: path("m13.525 6.212l6.008 10.68a1.75 1.75 0 0 1-1.525 2.608H5.992a1.75 1.75 0 0 1-1.525-2.608l6.008-10.68a1.75 1.75 0 0 1 3.05 0");
}

.hdf0iubem {
  d: path("m9 19.5l3-6l3 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="e1iu4jb7r"/><path class="hdf0iubem"/></g>`,
		"fallback": "uix:team-outing",
	});
}

export default Component;

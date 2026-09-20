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
		"content": `<style>.bb_62lblh {
  d: path("M5.5 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.fp0jerb6p {
  d: path("M10.5 6H13a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.tqfrzx00u {
  d: path("m19 10 3 -3v10l-3 -3Z");
}

.y0y0ccsoe {
  d: path("M10 12h4");
}
</style><g class="s0phu2bbs"><path class="fp0jerb6p"/><path class="tqfrzx00u"/><path class="bb_62lblh"/><path class="y0y0ccsoe"/></g>`,
		"fallback": "iconmind:video-track-outline-bold",
	});
}

export default Component;

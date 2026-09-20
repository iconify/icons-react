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
		"content": `<style>.c13n5ccfl {
  fill: currentColor;
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gr6oczwos {
  d: path("M6 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.j8cfcybmc {
  fill: currentColor;
  d: path("M6 12a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.kq7vo0b0k {
  d: path("M15 14h3");
}

.n09nomjwg {
  d: path("M15 6h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H6a3 3 0 0 1 -3 -3V9a3 3 0 0 1 3 -3h3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.ttndetbut {
  d: path("M15 10h3");
}
</style><g class="s0phu2bbs"><path class="c13n5ccfl"/><path class="j8cfcybmc"/><path class="n09nomjwg"/><path class="gr6oczwos"/><path class="ttndetbut"/><path class="kq7vo0b0k"/></g>`,
		"fallback": "iconmind:multimodal-duotone-bold",
	});
}

export default Component;

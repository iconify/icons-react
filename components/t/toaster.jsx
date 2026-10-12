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
		"content": `<style>.bdc4p8bad {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 13.5h4");
}

.c7hk1xptw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 20.25v1m11-1v1");
}

.mzfigxbcc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 7.25v-2a2 2 0 0 1 4 0v2m3 0v-2a2 2 0 0 1 4 0v2");
}

.n2fha8b2l {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M16.75 15.25h.01");
}

.y1u-8ibcw {
  width: 18.5px;
  height: 10.5px;
  x: 2.75px;
  y: 9.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 3px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="mzfigxbcc"/><rect class="y1u-8ibcw"/><path class="bdc4p8bad"/><path class="n2fha8b2l"/><path class="c7hk1xptw"/></g>`,
		"fallback": "iconoven:toaster",
	});
}

export default Component;

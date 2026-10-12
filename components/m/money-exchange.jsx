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
		"content": `<style>.e0c3zzivc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.5 4.75h.75a2 2 0 0 1 2 2v3.5M17.5 8.5l1.75 1.75L21 8.5M7.5 19.25h-.75a2 2 0 0 1-2-2v-3.5M3 15.5l1.75-1.75L6.5 15.5");
}

.egp1vpmub {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.5 6.75h.01");
}

.fcstfnjyb {
  width: 11.5px;
  height: 7px;
  x: 9.75px;
  y: 13.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.fhh37czdi {
  width: 11.5px;
  height: 7px;
  x: 2.75px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.jvwyttbgr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M15.5 17.25h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="fhh37czdi"/><path class="egp1vpmub"/><rect class="fcstfnjyb"/><path class="jvwyttbgr"/><path class="e0c3zzivc"/></g>`,
		"fallback": "iconoven:money-exchange",
	});
}

export default Component;

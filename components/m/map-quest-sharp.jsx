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
		"content": `<style>.e360z56yh {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 4h16v16h-5l-2-1.5l-2 1.5H3V4z");
}

.fje8jacvh {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 16.25h.01M9 14.5h.01m2.24-2h.01m1.99-2h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.xlu1w_5mk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15 6.5l3.5 3.5m0-3.5L15 10");
}
</style><g class="ux2u0rbkq"><path class="e360z56yh"/><path class="fje8jacvh"/><path class="xlu1w_5mk"/></g>`,
		"fallback": "iconoven:map-quest-sharp",
	});
}

export default Component;

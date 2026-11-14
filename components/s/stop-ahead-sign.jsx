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
		"content": `<style>.bzirq8bkg {
  d: path("M10.871 8h2.258a1.5 1.5 0 0 1 1.06.439l1.372 1.372a1.5 1.5 0 0 1 .439 1.06v2.258a1.5 1.5 0 0 1-.439 1.06l-1.372 1.372a1.5 1.5 0 0 1-1.06.439h-2.258a1.5 1.5 0 0 1-1.06-.439l-1.372-1.372A1.5 1.5 0 0 1 8 13.129v-2.258a1.5 1.5 0 0 1 .439-1.06l1.372-1.372A1.5 1.5 0 0 1 10.871 8");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jefgrcc3u {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0");
}
</style><g class="hntgybcog"><path class="jefgrcc3u"/><path class="bzirq8bkg"/></g>`,
		"fallback": "uix:stop-ahead-sign",
	});
}

export default Component;

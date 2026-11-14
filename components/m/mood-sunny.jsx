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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kgd6glble {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0m6-10v1.5m0 17V22M2 12h1.5m17 0H22M5 5l1 1m13-1l-1 1M5 19l1-1m13 1l-1-1");
}

.z1h2opfkt {
  d: path("M9.25 13.5q2.75 2.5 5.5 0M10 10h.01M14 10h.01");
}
</style><g class="hntgybcog"><path class="kgd6glble"/><path class="z1h2opfkt"/></g>`,
		"fallback": "uix:mood-sunny",
	});
}

export default Component;

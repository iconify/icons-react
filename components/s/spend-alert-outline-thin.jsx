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
		"content": `<style>.gcy6xobcc {
  d: path("M3 12a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hxmy65bqc {
  d: path("M19 6.5v5");
}

.snl1mwbpd {
  d: path("M7 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.v15ibfbyr {
  d: path("M18 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}
</style><g class="hntgybcog"><path class="gcy6xobcc"/><path class="snl1mwbpd"/><path class="hxmy65bqc"/><path class="v15ibfbyr"/></g>`,
		"fallback": "iconmind:spend-alert-outline-thin",
	});
}

export default Component;

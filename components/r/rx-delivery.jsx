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
		"content": `<style>.d55yj2bsn {
  d: path("M5 16.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10.5 0a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-8-11V9");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.kh6cjybjd {
  d: path("M2.5 14.5h19V10l-3-3.5h-4v8");
}

.q5t0-q9du {
  d: path("M4.75 5.5h5.5A1.75 1.75 0 0 1 12 7.25v5.5a1.75 1.75 0 0 1-1.75 1.75h-5.5A1.75 1.75 0 0 1 3 12.75v-5.5A1.75 1.75 0 0 1 4.75 5.5");
}
</style><g class="hntgybcog"><path class="kh6cjybjd"/><path class="q5t0-q9du"/><path class="d55yj2bsn"/></g>`,
		"fallback": "uix:rx-delivery",
	});
}

export default Component;

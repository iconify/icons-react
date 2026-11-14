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

.uodpjtiaw {
  d: path("M11.464 16.036za1.5 1.5 0 0 1 0 2.121l-1.414 1.414a1.5 1.5 0 0 1-2.121 0a1.5 1.5 0 0 1 0-2.121l1.414-1.414a1.5 1.5 0 0 1 2.121 0M3.75 5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M6 15V9.75M4.25 11.5L6 9.75l1.75 1.75");
}

.zvbuf_b3t {
  d: path("M10 12.5a5 5 0 1 0 10 0a5 5 0 1 0-10 0");
}
</style><g class="hntgybcog"><path class="zvbuf_b3t"/><path class="uodpjtiaw"/></g>`,
		"fallback": "uix:ping-pong-serve",
	});
}

export default Component;

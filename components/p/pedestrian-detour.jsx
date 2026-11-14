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
		"content": `<style>.c7s9-effc {
  d: path("m14.475 4.725l4.8 4.8a3.5 3.5 0 0 1 0 4.95l-4.8 4.8a3.5 3.5 0 0 1-4.95 0l-4.8-4.8a3.5 3.5 0 0 1 0-4.95l4.8-4.8a3.5 3.5 0 0 1 4.95 0M10.5 16.25v-8.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qnvxqebrk {
  d: path("M10.5 14q0-4 4-4h.75");
}

.u__znebfc {
  d: path("m13.25 8l2 2l-2 2");
}
</style><g class="hntgybcog"><path class="c7s9-effc"/><path class="qnvxqebrk"/><path class="u__znebfc"/></g>`,
		"fallback": "uix:pedestrian-detour",
	});
}

export default Component;

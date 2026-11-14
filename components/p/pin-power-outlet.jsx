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

.j51f-ebgg {
  d: path("M6 12a6 6 0 1 0 12 0a6 6 0 1 0-12 0");
}

.jsztq_emy {
  d: path("M9.5 2.5h5a7 7 0 0 1 7 7v5a7 7 0 0 1-7 7h-5a7 7 0 0 1-7-7v-5a7 7 0 0 1 7-7");
}

.lqryz6b3u {
  fill: currentColor;
  d: path("M8.5 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m5 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0");
}
</style><g class="hntgybcog"><path class="jsztq_emy"/><path class="j51f-ebgg"/><path class="lqryz6b3u"/></g>`,
		"fallback": "uix:pin-power-outlet",
	});
}

export default Component;

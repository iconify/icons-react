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
		"content": `<style>.df9z7t-yn {
  d: path("M4.5 11V7a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v4M5 18.5v2m14-2v2");
}

.g4l5ccc4m {
  d: path("M2.5 13a2 2 0 0 1 4 0v2h11v-2a2 2 0 0 1 4 0v5.5h-19Z");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="g4l5ccc4m"/><path class="df9z7t-yn"/></g>`,
		"fallback": "uix:reading-chair",
	});
}

export default Component;

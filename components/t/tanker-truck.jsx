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

.ihp6nfbah {
  d: path("M15.5 18.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0m-13-4H16");
}

.jkvxadb0n {
  d: path("M2 10a7 4.5 0 1 0 14 0a7 4.5 0 1 0-14 0m14-2h3l2.5 4v4.5H16m-12 2a2 2 0 1 0 4 0a2 2 0 1 0-4 0");
}
</style><g class="hntgybcog"><path class="jkvxadb0n"/><path class="ihp6nfbah"/></g>`,
		"fallback": "uix:tanker-truck",
	});
}

export default Component;

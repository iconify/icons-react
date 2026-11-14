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
		"content": `<style>.bnjdu4b-s {
  d: path("M12.75 6a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0M8.5 13L11 9.5l2 2l1-1l1.5 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lsja6ob9g {
  d: path("M8.25 2.5h7.5a1.75 1.75 0 0 1 1.75 1.75v9.5a1.75 1.75 0 0 1-1.75 1.75h-7.5a1.75 1.75 0 0 1-1.75-1.75v-9.5A1.75 1.75 0 0 1 8.25 2.5m3.75 13V19m-4.5 2.5a4.5 2.5 0 0 1 9 0Z");
}
</style><g class="hntgybcog"><path class="lsja6ob9g"/><path class="bnjdu4b-s"/></g>`,
		"fallback": "uix:poster-stand",
	});
}

export default Component;

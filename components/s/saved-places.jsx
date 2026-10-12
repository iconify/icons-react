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

.nw7lwi30m {
  d: path("M12 13c-1.75-1.75-3-3-3-4.75a3 3 0 0 1 6 0c0 1.75-1.25 3-3 4.75");
}

.ssfxknbdm {
  d: path("M6.5 2.75h11q1.25 0 1.25 1.25v16q0 1.25-1.02.53l-4.71-3.31q-1.02-.72-2.04 0l-4.71 3.31q-1.02.72-1.02-.53V4q0-1.25 1.25-1.25");
}
</style><g class="hntgybcog"><path class="ssfxknbdm"/><path class="nw7lwi30m"/></g>`,
		"fallback": "iconoven:saved-places",
	});
}

export default Component;

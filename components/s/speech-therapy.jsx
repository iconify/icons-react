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
		"content": `<style>.bgdkhnbza {
  d: path("M2.5 12C4 9.5 5.5 9 7 9.5c.75.25 1.25.5 1.5.5s.75-.25 1.5-.5c1.5-.5 3 0 4.5 2.5c-1.5 3-3.5 4-6 4s-4.5-1-6-4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zsm_zbboa {
  d: path("M2.5 12c3.5.75 8.5.75 12 0m2.298-2.298a3.25 3.25 0 0 1 0 4.596m2.681-6.476a6.5 6.5 0 0 1 0 8.356");
}
</style><g class="hntgybcog"><path class="bgdkhnbza"/><path class="zsm_zbboa"/></g>`,
		"fallback": "uix:speech-therapy",
	});
}

export default Component;

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
		"content": `<style>.fbl52sb-c {
  d: path("M6 2.5h11A2.5 2.5 0 0 1 19.5 5v14a2.5 2.5 0 0 1-2.5 2.5H6A1.5 1.5 0 0 1 4.5 20V4A1.5 1.5 0 0 1 6 2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.m36q-gbid {
  d: path("M7.5 10a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0-9 0");
}

.vu09u7bel {
  d: path("M10.25 10a1.75 4.5 0 1 0 3.5 0a1.75 4.5 0 1 0-3.5 0m-.75 7.5h5");
}
</style><g class="hntgybcog"><path class="fbl52sb-c"/><path class="m36q-gbid"/><path class="vu09u7bel"/></g>`,
		"fallback": "uix:passport-card",
	});
}

export default Component;

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
		"content": `<style>.d_xgh4bbq {
  d: path("M9.75 8.5a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0M7 15.75a8 3 0 1 0 10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qkirkcyvw {
  d: path("M12 17c-2.5-2-6-5-6-8.5a6 6 0 0 1 12 0c0 3.5-3.5 6.5-6 8.5");
}
</style><g class="hntgybcog"><path class="qkirkcyvw"/><path class="d_xgh4bbq"/></g>`,
		"fallback": "uix:map-pin-pulse",
	});
}

export default Component;

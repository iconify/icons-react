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
		"content": `<style>.bc8bo92wl {
  d: path("M12 2.5S9.75 5.25 9.75 7a2.25 2.25 0 0 0 4.5 0c0-1.75-2.25-4.5-2.25-4.5m-3 17h.01m2.99 1h.01m2.99-1h.01");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lk6-p1t6l {
  d: path("M2 7.5h3.5l2.5 8h8l2.5-8H22");
}
</style><g class="hntgybcog"><path class="lk6-p1t6l"/><path class="bc8bo92wl"/></g>`,
		"fallback": "uix:soakaway",
	});
}

export default Component;

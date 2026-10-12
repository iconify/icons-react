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
		"content": `<style>.fph8fk4ki {
  d: path("M2.75 6.4a1 1 0 0 1 .64-.93L8.5 3.5l7 2.5l5.11-1.96a.48.48 0 0 1 .64.45v13.1a1 1 0 0 1-.64.93L15.5 20.5l-7-2.5l-5.11 1.96a.48.48 0 0 1-.64-.45ZM8.5 3.5V18m7-12v14.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yztocec_x {
  d: path("m5.5 15.25l4-4.25l4 2.75l4.75-5.25");
}
</style><g class="hntgybcog"><path class="fph8fk4ki"/><path class="yztocec_x"/></g>`,
		"fallback": "iconoven:map-route",
	});
}

export default Component;

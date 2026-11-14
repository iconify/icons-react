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

.noysz0zug {
  d: path("M14.25 4a3.5 3.5 0 0 1 0 5m1.25 6.5l5 5m0-5l-5 5");
}

.uxetzzb1c {
  d: path("M2.5 11H12v10.5m1.5-15a4 4 0 1 0 8 0a4 4 0 1 0-8 0");
}
</style><g class="hntgybcog"><path class="uxetzzb1c"/><path class="noysz0zug"/></g>`,
		"fallback": "uix:tennis-fault",
	});
}

export default Component;

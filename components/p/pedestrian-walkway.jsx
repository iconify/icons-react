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

.olr2grbbh {
  d: path("M11.25 4.25a2.25 2.25 0 1 0 4.5 0a2.25 2.25 0 1 0-4.5 0m1.75 5L11.5 14L8 18.25M11.5 14l2.75 1.75l.5 2.5");
}

.wx7bfu3zy {
  d: path("m8.5 12.5l4.25-2.5l3.75 2M3 21h3.5m3.75 0h3.5m3.75 0H21");
}
</style><g class="hntgybcog"><path class="olr2grbbh"/><path class="wx7bfu3zy"/></g>`,
		"fallback": "uix:pedestrian-walkway",
	});
}

export default Component;

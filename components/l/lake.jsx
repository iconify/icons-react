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
		"content": `<style>.ckeh6gifg {
  d: path("M6.75 14.75c.75-.5 1.75-.5 2.5 0s1.75.5 2.5 0m-.75 3c.75-.5 1.75-.5 2.5 0s1.75.5 2.5 0M5.75 9.5l6.25-6l6.25 6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z2pvysbov {
  d: path("M2.75 16.25a9.25 5 0 1 0 18.5 0a9.25 5 0 1 0-18.5 0");
}
</style><g class="hntgybcog"><path class="z2pvysbov"/><path class="ckeh6gifg"/></g>`,
		"fallback": "iconoven:lake",
	});
}

export default Component;

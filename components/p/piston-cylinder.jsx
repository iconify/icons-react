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

.x-xvdcc7d {
  d: path("M5 5v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5");
}

.xsx3-g7lm {
  d: path("M6.5 11h11a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 5 12.5A1.5 1.5 0 0 1 6.5 11m2-8.5h7m-3.5 0V11");
}
</style><g class="hntgybcog"><path class="x-xvdcc7d"/><path class="xsx3-g7lm"/></g>`,
		"fallback": "uix:piston-cylinder",
	});
}

export default Component;

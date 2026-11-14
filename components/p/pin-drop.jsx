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
		"content": `<style>.c2rp72bwb {
  d: path("M12 21.5S4.5 15 4.5 9.75a7.5 7.5 0 0 1 15 0C19.5 15 12 21.5 12 21.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pxga7xbbk {
  d: path("M9.25 9.75a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0");
}
</style><g class="hntgybcog"><path class="c2rp72bwb"/><path class="pxga7xbbk"/></g>`,
		"fallback": "uix:pin-drop",
	});
}

export default Component;

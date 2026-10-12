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
		"content": `<style>.aw-1iybkr {
  d: path("M5.25 18v3.25M18.75 18v3.25");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.omwi7dbvw {
  width: 18.5px;
  height: 4.75px;
  x: 2.75px;
  y: 13.25px;
  rx: 1.5px;
}

.s_32ibqcu {
  d: path("M2.75 7.75a1.5 1.5 0 0 1 1.5-1.5h1.6a1.5 1.5 0 0 1 1.4.95l2.4 6.05h-6.9Z");
}
</style><g class="hntgybcog"><path class="s_32ibqcu"/><rect class="omwi7dbvw"/><path class="aw-1iybkr"/></g>`,
		"fallback": "iconoven:therapy-couch",
	});
}

export default Component;

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
		"content": `<style>.bv205xb1r {
  d: path("M9.75 11.25h4.5A1.75 1.75 0 0 1 16 13a1.75 1.75 0 0 1-1.75 1.75h-4.5A1.75 1.75 0 0 1 8 13a1.75 1.75 0 0 1 1.75-1.75m2.25 0v3.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q3wixnhae {
  d: path("M3 7a2 2 0 0 1 2-2h4.5l2 2H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}
</style><g class="hntgybcog"><path class="q3wixnhae"/><path class="bv205xb1r"/></g>`,
		"fallback": "uix:rx-folder",
	});
}

export default Component;

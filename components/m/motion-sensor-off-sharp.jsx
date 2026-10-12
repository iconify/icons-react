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
		"content": `<style>.iiz9efqgf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M14.66 10.25a9 9 0 0 1-.82 2.7m-.81 1.34a9 9 0 0 1-1.99 1.99m-1.34.81a9 9 0 0 1-2.7.82m11.68-7.55a13 13 0 0 1-.64 2.87m-.71 1.67a13 13 0 0 1-1.62 2.46m-1.26 1.3a13 13 0 0 1-2.4 1.71");
}

.t27mvbc3u {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 9h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.zonj8h7do {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 3.5v11m3-10.5a5 5 0 0 1 0 10Z");
}
</style><g class="ux2u0rbkq"><path class="zonj8h7do"/><path class="t27mvbc3u"/><path class="iiz9efqgf"/></g>`,
		"fallback": "iconoven:motion-sensor-off-sharp",
	});
}

export default Component;

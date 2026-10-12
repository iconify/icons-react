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
		"content": `<style>.nloarb2jk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 19.25q2.25-1.875 4.5 0c2.25 1.875 3 1.25 4.5 0s3-1.25 4.5 0s3 1.25 4.5 0");
}

.oyw4v1b4q {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 10.5c1.5.75 2.5 0 4.25 0h7.01a3 3 0 1 1 5.59 1.25c.9 0 1.4.5 1.4 1s-.75.75-1.75.75c-.75.25-1 .75-2.25.75H6.5c-1.5 0-2.25-.75-2.25-1.75c-.5-1-.75-1.5-1.5-2m5.75 0l.75-2m2 2l.75-2");
}

.sch89tb6f {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 9.75h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="oyw4v1b4q"/><path class="sch89tb6f"/><path class="nloarb2jk"/></g>`,
		"fallback": "iconoven:otter",
	});
}

export default Component;

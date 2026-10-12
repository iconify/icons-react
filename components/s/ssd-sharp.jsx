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
		"content": `<style>.d-36f2b-f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 10.25h5v3.5h-5zM13.5 12H16");
}

.fbuns0u1y {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 7.75h18.5v8.5H2.75z");
}

.hv7qdkb8s {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18.5 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="fbuns0u1y"/><path class="d-36f2b-f"/><path class="hv7qdkb8s"/></g>`,
		"fallback": "iconoven:ssd-sharp",
	});
}

export default Component;

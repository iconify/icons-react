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
		"content": `<style>.g1-rqtbnw {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.38 5.18A5.35 5.35 0 1 0 12 13.6a2.15 2.15 0 1 1-2.03 2.85l-.12-.59l-1.57-.57l-1.56 1.3l.22.9A5.35 5.35 0 1 0 12 10.4a2.15 2.15 0 1 1 1.76-3.38a1.95 1.95 0 0 0 2.62-1.84Zm.12 3.07l1 1.25m0 0l1.25.25M17.5 9.5l.25 1.25");
}

.i-td7prfw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13.75 5.75h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="g1-rqtbnw"/><path class="i-td7prfw"/></g>`,
		"fallback": "iconoven:snake-sharp",
	});
}

export default Component;

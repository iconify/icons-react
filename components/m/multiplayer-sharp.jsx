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
		"content": `<style>.a-mcl9b0v {
  cx: 7px;
  cy: 6px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.l5ips3bsh {
  cx: 17px;
  cy: 6px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.os0js-d_p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.75 11h8.5l2.559.01l.591 2.49l.8 4.3a2 2 0 0 1-3.45 1.75L14.5 17.5h-5l-2.25 2.05A2 2 0 0 1 3.8 17.8l.8-4.3l.591-2.49z");
}

.rfhlbzqfy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8.25 14.5h.01m7.49 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><circle class="a-mcl9b0v"/><circle class="l5ips3bsh"/><path class="os0js-d_p"/><path class="rfhlbzqfy"/></g>`,
		"fallback": "iconoven:multiplayer-sharp",
	});
}

export default Component;

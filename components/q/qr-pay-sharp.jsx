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
		"content": `<style>.g8rxpikcz {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h7v7h-7zm10.5 0h7v7h-7zm-10.5 10.5h7v7h-7z");
}

.pegcclbmn {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.75 6.75h.01m10.49 0h.01M6.75 17.25h.01");
}

.t-f4-ze4h {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m15.75 17.25l1 1l2-2");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.ytfrt8b4j {
  cx: 17.25px;
  cy: 17.25px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ux2u0rbkq"><path class="g8rxpikcz"/><path class="pegcclbmn"/><circle class="ytfrt8b4j"/><path class="t-f4-ze4h"/></g>`,
		"fallback": "iconoven:qr-pay-sharp",
	});
}

export default Component;

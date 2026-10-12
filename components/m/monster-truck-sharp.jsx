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
		"content": `<style>.jhfl8tb7m {
  cx: 17.5px;
  cy: 17.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pauvkn1qr {
  cx: 6.5px;
  cy: 17.5px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qvoc8gbpg {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 17.5h.01");
}

.spmb-6bdc {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 9V8H11V3.75h4.15l.867-.001l.433.751l1.9 3.5h2.4v3.25H3.25v-1Zm10.5-5.25V8");
}

.t063bibnx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 17.5h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="spmb-6bdc"/><circle class="pauvkn1qr"/><path class="qvoc8gbpg"/><circle class="jhfl8tb7m"/><path class="t063bibnx"/></g>`,
		"fallback": "iconoven:monster-truck-sharp",
	});
}

export default Component;

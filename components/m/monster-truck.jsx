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

.t063bibnx {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.5 17.5h.01");
}

.vjy09hwqi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 9a1 1 0 0 1 1-1H11V4.75a1 1 0 0 1 1-1h3.15a1.5 1.5 0 0 1 1.3.75l1.9 3.5h1.4a1 1 0 0 1 1 1v1.25a1 1 0 0 1-1 1H4.25a1 1 0 0 1-1-1Zm10.5-5.25V8");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="vjy09hwqi"/><circle class="pauvkn1qr"/><path class="qvoc8gbpg"/><circle class="jhfl8tb7m"/><path class="t063bibnx"/></g>`,
		"fallback": "iconoven:monster-truck",
	});
}

export default Component;

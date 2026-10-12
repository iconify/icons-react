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
		"content": `<style>.c52g3iqwi {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.5 11.28L5.6 6a1.76 1.76 0 0 1 3.3-1.2l1.6 4.64m6 1.84L18.4 6a1.76 1.76 0 0 0-3.3-1.2l-1.6 4.64");
}

.gu8uj_bfl {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 14.5h.01m4.49 0h.01");
}

.gzk5d2xwl {
  cx: 12px;
  cy: 15.25px;
  r: 6px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.p4g45hywd {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 17.25h1.5");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="c52g3iqwi"/><circle class="gzk5d2xwl"/><path class="gu8uj_bfl"/><path class="p4g45hywd"/></g>`,
		"fallback": "iconoven:rabbit",
	});
}

export default Component;

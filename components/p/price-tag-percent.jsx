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
		"content": `<style>.d7as5yi3p {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m6.85 6.6l4.4-3.6a1.2 1.2 0 0 1 1.5 0l4.4 3.6a2 2 0 0 1 .6 1.43v11.22a2 2 0 0 1-2 2h-7.5a2 2 0 0 1-2-2V8.03a2 2 0 0 1 .6-1.43");
}

.f27_oi5kf {
  cx: 12px;
  cy: 7.75px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.up99124la {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m9.75 17.5l4.5-4.5");
}

.vgktj9bsy {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.75 13h.01m4.49 4.5h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="d7as5yi3p"/><circle class="f27_oi5kf"/><path class="up99124la"/><path class="vgktj9bsy"/></g>`,
		"fallback": "iconoven:price-tag-percent",
	});
}

export default Component;

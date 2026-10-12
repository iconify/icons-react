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
		"content": `<style>.dp-vb-h_k {
  width: 4.5px;
  height: 11.5px;
  x: 16.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.ek3p4pbiq {
  width: 4.5px;
  height: 11.5px;
  x: 2.75px;
  y: 6.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.iky650bpj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9.5h.01m-.01 5h.01M12 7h.01M12 12h.01M12 17h.01M19 9.5h.01m-.01 5h.01");
}

.j4tnckb8x {
  width: 4.5px;
  height: 18.5px;
  x: 9.75px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.25px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ek3p4pbiq"/><rect class="j4tnckb8x"/><rect class="dp-vb-h_k"/><path class="iky650bpj"/></g>`,
		"fallback": "iconoven:layer-stack",
	});
}

export default Component;

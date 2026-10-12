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
		"content": `<style>.ejow8ertj {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 17h.01");
}

.gu8mtobek {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 17h2.5m7.5 0h2.5");
}

.iczxq-bxv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 8.25v4.5m10.5-4.5v4.5");
}

.iemelsbrk {
  width: 7px;
  height: 5px;
  x: 3.25px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.kq4f3ub9m {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 12.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2.5px;
}

.pz02k-bbq {
  width: 7px;
  height: 5px;
  x: 13.75px;
  y: 3.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1.5px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="iemelsbrk"/><rect class="pz02k-bbq"/><path class="iczxq-bxv"/><rect class="kq4f3ub9m"/><path class="gu8mtobek"/><path class="ejow8ertj"/></g>`,
		"fallback": "iconoven:kvm-switch",
	});
}

export default Component;

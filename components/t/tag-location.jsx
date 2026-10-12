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
		"content": `<style>.brmm-8btn {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.75S2.75 16 2.75 11a5.25 5.25 0 0 1 10.5 0c0 5-5.25 9.75-5.25 9.75");
}

.bwa-9sbrs {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.25 18.25h.01");
}

.ch8ymdbca {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M16.25 15.25H18q1 0 1.6.8l1.05 1.4q.6.8 0 1.6l-1.05 1.4q-.6.8-1.6.8h-1.75q-1 0-1-1v-4q0-1 1-1");
}

.n34kd4b2z {
  cx: 8px;
  cy: 11px;
  r: 2px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="brmm-8btn"/><circle class="n34kd4b2z"/><path class="ch8ymdbca"/><path class="bwa-9sbrs"/></g>`,
		"fallback": "iconoven:tag-location",
	});
}

export default Component;

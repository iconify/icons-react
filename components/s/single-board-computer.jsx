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
		"content": `<style>.cg1u9nj-c {
  width: 5.5px;
  height: 5.5px;
  x: 6.25px;
  y: 11px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.ofoxgrq4c {
  width: 18.5px;
  height: 15.5px;
  x: 2.75px;
  y: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.p5xe5qgzb {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M15.25 12.25h2.5m-2.5 3h2.5");
}

.v8g1hmbbw {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6.5 7.5h.01m2.74 0h.01m2.74 0h.01m2.74 0h.01m2.74 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="ofoxgrq4c"/><path class="v8g1hmbbw"/><rect class="cg1u9nj-c"/><path class="p5xe5qgzb"/></g>`,
		"fallback": "iconoven:single-board-computer",
	});
}

export default Component;

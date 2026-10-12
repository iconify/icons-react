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
		"content": `<style>.nsd-gy-mf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 17h2m2.5 0h2");
}

.tq_7myb4n {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17.25 17h.01");
}

.tq6mqfbto {
  width: 18.5px;
  height: 8.5px;
  x: 2.75px;
  y: 12.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 2px;
}

.w3ptzmp9a {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4.5h15m-1.75-1.75L19.5 4.5l-1.75 1.75m1.75 2.5h-15M6.25 7L4.5 8.75l1.75 1.75");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="tq6mqfbto"/><path class="nsd-gy-mf"/><path class="tq_7myb4n"/><path class="w3ptzmp9a"/></g>`,
		"fallback": "iconoven:network-switch",
	});
}

export default Component;

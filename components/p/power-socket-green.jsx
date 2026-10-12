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
		"content": `<style>.f7ylp4bxu {
  cx: 10.75px;
  cy: 13.25px;
  r: 4.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.hem5r1tjq {
  cx: 18.5px;
  cy: 5.5px;
  r: 1.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.k3qmhjlid {
  cx: 10.75px;
  cy: 13.25px;
  r: 7.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.or6rsy9gd {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 13.25h.01m3.49 0h.01");
}

.r4qinnfmt {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M18.5 3.25v-.5m2.25 2.75h.5M18.5 7.75v.5M16.25 5.5h-.5m4.34-1.59l.35-.35m-3.53.35l-.35-.35m3.53 3.53l.35.35");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><circle class="k3qmhjlid"/><circle class="f7ylp4bxu"/><path class="or6rsy9gd"/><circle class="hem5r1tjq"/><path class="r4qinnfmt"/></g>`,
		"fallback": "iconoven:power-socket-green",
	});
}

export default Component;

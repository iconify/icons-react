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
		"content": `<style>.afkgn0o3z {
  cx: 10.25px;
  cy: 13.9px;
  r: 3.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ev07q6bgq {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m16.08 16.76l1.49 1.49l-2.97 2.97l-1.49-1.49a6.5 6.5 0 0 1-5.72 0L5.9 21.22l-2.97-2.97l1.49-1.49a6.5 6.5 0 0 1 0-5.72L2.93 9.55L5.9 6.58l1.49 1.49a6.5 6.5 0 0 1 5.72 0l1.49-1.49l2.97 2.97l-1.49 1.49a6.5 6.5 0 0 1 0 5.72");
}

.g8q6osbyv {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.25 7.4V5.5q0-1.25 1.25-1.25H18");
}

.pdkbpr4jm {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.25 13.9h.01");
}

.qviwpzbbi {
  width: 3.25px;
  height: 2.75px;
  x: 18px;
  y: 2.75px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 1px;
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="ev07q6bgq"/><circle class="afkgn0o3z"/><path class="pdkbpr4jm"/><path class="g8q6osbyv"/><rect class="qviwpzbbi"/></g>`,
		"fallback": "iconoven:rover-wheel",
	});
}

export default Component;

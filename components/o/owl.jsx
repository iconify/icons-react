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
		"content": `<style>.dd_6j-l0z {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 11h.01M15 11h.01");
}

.dwiwgye5v {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11 14.25l1 1.25l1-1.25m-3.5 4l1.25-.75l1.25.75l1.25-.75l1.25.75");
}

.dy1ykbc3u {
  cx: 15px;
  cy: 11px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ow0ax2vzz {
  cx: 9px;
  cy: 11px;
  r: 2.25px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.rt12wc7ip {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 3.75L8.5 6.5h7l3.75-2.75V14a7.25 7.25 0 0 1-14.5 0Z");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><path class="rt12wc7ip"/><circle class="ow0ax2vzz"/><circle class="dy1ykbc3u"/><path class="dd_6j-l0z"/><path class="dwiwgye5v"/></g>`,
		"fallback": "iconoven:owl",
	});
}

export default Component;

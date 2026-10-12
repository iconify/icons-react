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
		"content": `<style>.sak9p-56u {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m11.61 8.83l5.76-5.32q.37-.34.71.03l.84.92q.34.37-.03.71l-5.76 5.32q-.37.34-.71-.03l-.84-.92q-.34-.37.03-.71M10.5 21.25v-3h3v3");
}

.vy171rwno {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.5 14.5a6.5 6.5 0 0 1 13 0Z");
}

.w65fb04ro {
  width: 15px;
  height: 6.75px;
  x: 4.5px;
  y: 14.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  rx: 0.75px;
}

.wn_ge2p_i {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.5 17.75h.01m8.99 0h.01");
}

.y9tr6bcfx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
}
</style><g class="y9tr6bcfx"><rect class="w65fb04ro"/><path class="vy171rwno"/><path class="sak9p-56u"/><path class="wn_ge2p_i"/></g>`,
		"fallback": "iconoven:observatory",
	});
}

export default Component;

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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.km8tw_rir {
  width: 7.5px;
  height: 9px;
  x: 13.75px;
  y: 2.75px;
  rx: 1.5px;
}

.nwp_lzb7x {
  d: path("M3.75 21.25v-4.5a3.75 3.75 0 0 1 7.5 0v4.5Z");
}

.plyd-ybco {
  d: path("m12 15.25l3.75-3.5");
}

.vkh2p_buw {
  cx: 7.5px;
  cy: 7px;
  r: 2.75px;
}
</style><g class="hntgybcog"><circle class="vkh2p_buw"/><path class="nwp_lzb7x"/><rect class="km8tw_rir"/><path class="plyd-ybco"/></g>`,
		"fallback": "iconoven:teacher",
	});
}

export default Component;

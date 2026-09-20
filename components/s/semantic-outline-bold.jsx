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
		"content": `<style>.cspceacnq {
  d: path("m7 9 2.5 -2.5L12 9l2.5 -2.5L17 9");
}

.doxmgbcyh {
  d: path("m7 14 2.5 -2.5L12 14l2.5 -2.5L17 14");
}

.hbdbg_bcy {
  d: path("M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.lyjarcbwz {
  d: path("M7 18v3l3 -3");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="hbdbg_bcy"/><path class="lyjarcbwz"/><path class="cspceacnq"/><path class="doxmgbcyh"/></g>`,
		"fallback": "iconmind:semantic-outline-bold",
	});
}

export default Component;

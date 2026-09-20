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
		"content": `<style>.aut8y9hmn {
  d: path("M7 12v7");
}

.du_3_4tit {
  d: path("M4 21.5h16");
}

.ow_ax0v9r {
  d: path("M15 6v13");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.sgi0qkbzh {
  d: path("m9 10.5 3 -3");
}
</style><g class="s0phu2bbs"><path class="aut8y9hmn"/><path class="ow_ax0v9r"/><path class="du_3_4tit"/><path class="sgi0qkbzh"/></g>`,
		"fallback": "iconmind:uplift-outline-bold",
	});
}

export default Component;

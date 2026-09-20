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
		"content": `<style>.abnm6smsv {
  d: path("M13 3H6v18h12V8");
}

.lw-jkob5l {
  d: path("M12 6.5v4");
}

.n_1n94xtx {
  d: path("M9.5 8.5 12 11l2.5 -2.5");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.zpdz8rbaf {
  d: path("M9 15.5h6");
}
</style><g class="s0phu2bbs"><path class="abnm6smsv"/><path class="lw-jkob5l"/><path class="n_1n94xtx"/><path class="zpdz8rbaf"/></g>`,
		"fallback": "iconmind:request-body-outline-bold",
	});
}

export default Component;

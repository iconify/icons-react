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
		"content": `<style>.eki_s5bnj {
  d: path("m14 6 3 3 -3 3");
}

.prbs3ccnp {
  d: path("M8 21V9h9");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="prbs3ccnp"/><path class="eki_s5bnj"/></g>`,
		"fallback": "iconmind:turn-right-outline-bold",
	});
}

export default Component;

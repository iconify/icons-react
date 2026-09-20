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
		"content": `<style>.gdee6mpzo {
  d: path("M8 7c4 0 7 4 7 8");
}

.kn0tcm93r {
  d: path("M4 5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.o46_3ibvz {
  d: path("M3 20h6");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.z6mlq-bwt {
  d: path("M11 16h10v4H11Z");
}
</style><g class="s0phu2bbs"><path class="kn0tcm93r"/><path class="gdee6mpzo"/><path class="z6mlq-bwt"/><path class="o46_3ibvz"/></g>`,
		"fallback": "iconmind:long-jump-outline-bold",
	});
}

export default Component;

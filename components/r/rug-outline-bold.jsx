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
		"content": `<style>.o-vpc-waj {
  d: path("M3 12a9 4.5 0 1 1 18 0 9 4.5 0 1 1 -18 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.yq_iz_bvt {
  d: path("M6 12a6 3 0 1 1 12 0 6 3 0 1 1 -12 0");
}
</style><g class="s0phu2bbs"><path class="o-vpc-waj"/><path class="yq_iz_bvt"/></g>`,
		"fallback": "iconmind:rug-outline-bold",
	});
}

export default Component;

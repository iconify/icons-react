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
		"content": `<style>.ct382vdha {
  d: path("M17 6h5");
}

.oftm-sb_i {
  d: path("M13 14c5 0 7 -4 7 -8");
}

.p2k2ttlyo {
  d: path("M3 13a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="p2k2ttlyo"/><path class="oftm-sb_i"/><path class="ct382vdha"/></g>`,
		"fallback": "iconmind:vacuum-outline-bold",
	});
}

export default Component;

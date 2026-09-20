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
		"content": `<style>.bol6i856t {
  d: path("M3 7a2 2 0 0 1 2 -2h9a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.flc5_hbok {
  d: path("M15 17a3.5 3.5 0 0 1 7 0");
}

.jz2wn7nic {
  d: path("M16.5 10a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}
</style><g class="s0phu2bbs"><path class="bol6i856t"/><path class="jz2wn7nic"/><path class="flc5_hbok"/></g>`,
		"fallback": "iconmind:presenter-outline-bold",
	});
}

export default Component;

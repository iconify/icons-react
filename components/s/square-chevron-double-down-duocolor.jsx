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
		"content": `<style>.d59be9sai {
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.se2k2nbnk {
  stroke-opacity: 0.4;
  d: path("m9 14l3 3l3-3M9 8l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="se2k2nbnk"/><path class="d59be9sai"/></g>`,
		"fallback": "coolicons:square-chevron-double-down-duocolor",
	});
}

export default Component;

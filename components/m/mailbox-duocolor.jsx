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
		"content": `<style>.ld8hjv5zq {
  stroke-opacity: 0.4;
  d: path("M17 9V3h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u7xaunb4v {
  d: path("M7 9h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a4 4 0 0 1 4-4m0 0a4 4 0 0 1 4 4v8");
}
</style><g class="nrj6p8qat"><path class="ld8hjv5zq"/><path class="u7xaunb4v"/></g>`,
		"fallback": "coolicons:mailbox-duocolor",
	});
}

export default Component;

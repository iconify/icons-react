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
		"content": `<style>.hiyfnwbgc {
  stroke-opacity: 0.4;
  d: path("M10 11v8a2 2 0 1 0 4 0v-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w-mn8bmrv {
  d: path("M4 11a8 8 0 1 1 16 0Z");
}
</style><g class="nrj6p8qat"><path class="hiyfnwbgc"/><path class="w-mn8bmrv"/></g>`,
		"fallback": "coolicons:mushroom-duocolor",
	});
}

export default Component;

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
		"content": `<style>.leki8j95v {
  stroke-opacity: 0.4;
  d: path("M3 20h13c1.7 0 3-1.3 3-3V8m0 0l-2-4m2 4l2-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y2evo6q0r {
  d: path("M3 20v-8a6 6 0 1 1 12 0a4 4 0 1 1-8 0a2 2 0 1 1 4 0");
}
</style><g class="nrj6p8qat"><path class="leki8j95v"/><path class="y2evo6q0r"/></g>`,
		"fallback": "coolicons:snail-duocolor",
	});
}

export default Component;

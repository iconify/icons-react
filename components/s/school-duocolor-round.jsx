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
		"content": `<style>.ltbozbc2i {
  stroke-opacity: 0.4;
  d: path("M10 10a2 2 0 1 0 4 0a2 2 0 0 0-4 0m0 11v-3a2 2 0 1 1 4 0v3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p_96l4qaz {
  d: path("m4 7l6-3a4.47 4.47 0 0 1 4 0l6 3M6 6v5l-3 2v4a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-4l-3-2V6");
}
</style><g class="nrj6p8qat"><path class="ltbozbc2i"/><path class="p_96l4qaz"/></g>`,
		"fallback": "coolicons:school-duocolor-round",
	});
}

export default Component;

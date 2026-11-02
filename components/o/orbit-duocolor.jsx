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
		"content": `<style>.kmiew8bty {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 0 0-6 0m10-4a8.062 8.062 0 0 1-8 12m-6-4a8.062 8.062 0 0 1 8-12");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o8po9q5jx {
  stroke-opacity: 0.4;
  d: path("M17 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="o8po9q5jx"/><path class="kmiew8bty"/></g>`,
		"fallback": "coolicons:orbit-duocolor",
	});
}

export default Component;

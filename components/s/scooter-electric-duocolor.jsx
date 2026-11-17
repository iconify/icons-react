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
		"content": `<style>.aneh8zb7v {
  stroke-opacity: 0.4;
  d: path("M3 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m14 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M10 4L7 8h4l-3 4");
}

.js34wb59d {
  d: path("M21 4h-4l2 12M7 18h5c2 0 2-8 6-8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="aneh8zb7v"/><path class="js34wb59d"/></g>`,
		"fallback": "coolicons:scooter-electric-duocolor",
	});
}

export default Component;

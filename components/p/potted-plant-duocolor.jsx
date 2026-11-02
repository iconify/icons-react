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
		"content": `<style>.k8695sbsq {
  stroke-opacity: 0.4;
  d: path("M12 9a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Zm0 2a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Z");
}

.k8j91m9wc {
  d: path("M7 16h10v3a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zm5 0V9");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="k8695sbsq"/><path class="k8j91m9wc"/></g>`,
		"fallback": "coolicons:potted-plant-duocolor",
	});
}

export default Component;

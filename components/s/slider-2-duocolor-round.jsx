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
		"content": `<style>.ixdelfboe {
  d: path("M8 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m6 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0m-8 6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u2fqe1bcs {
  stroke-opacity: 0.4;
  d: path("M3 6h5m4 0h9M3 12h11m4 0h3M3 18h3m4 0h11");
}
</style><g class="nrj6p8qat"><path class="u2fqe1bcs"/><path class="ixdelfboe"/></g>`,
		"fallback": "coolicons:slider-2-duocolor-round",
	});
}

export default Component;

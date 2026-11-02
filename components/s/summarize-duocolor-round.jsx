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
		"content": `<style>.hx1hvgz7r {
  d: path("M3 5h18M3 11h9m-9 6h5");
}

.l8mhrrbdg {
  stroke-opacity: 0.4;
  d: path("M17 11c0 2 2 4 4 4c-2 0-4 2-4 4c0-2-2-4-4-4c2 0 4-2 4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="l8mhrrbdg"/><path class="hx1hvgz7r"/></g>`,
		"fallback": "coolicons:summarize-duocolor-round",
	});
}

export default Component;

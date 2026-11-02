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
		"content": `<style>.nqqqpab0e {
  stroke-opacity: 0.4;
  d: path("M9 3v6m6-6v6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ol3jf_bij {
  d: path("M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m2 3v8a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4V9m-9 12v-4a2 2 0 1 1 4 0v4");
}
</style><g class="nrj6p8qat"><path class="nqqqpab0e"/><path class="ol3jf_bij"/></g>`,
		"fallback": "coolicons:store-duocolor-round",
	});
}

export default Component;

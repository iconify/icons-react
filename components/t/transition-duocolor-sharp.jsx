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
		"content": `<style>.hr-potq3y {
  d: path("M4 18a2 2 0 1 0 4 0a2 2 0 0 0-4 0m12 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.lxa2rxbeo {
  stroke-opacity: 0.4;
  d: path("M6 12v-2a6 6 0 1 1 12 0v2m-3-3l3 3l3-3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lxa2rxbeo"/><path class="hr-potq3y"/></g>`,
		"fallback": "coolicons:transition-duocolor-sharp",
	});
}

export default Component;

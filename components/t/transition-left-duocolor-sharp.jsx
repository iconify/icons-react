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

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yxm3yibam {
  stroke-opacity: 0.4;
  d: path("M18 12v-2a6 6 0 1 0-12 0v2M3 9l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="yxm3yibam"/><path class="hr-potq3y"/></g>`,
		"fallback": "coolicons:transition-left-duocolor-sharp",
	});
}

export default Component;

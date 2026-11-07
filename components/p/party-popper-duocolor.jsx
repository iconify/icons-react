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
		"content": `<style>.cg70mx2mz {
  d: path("M7 9L3 21l12-4c-2 2-10-6-8-8m0 0c2-2 10 6 8 8S5 11 7 9");
}

.il6bgobqb {
  stroke-opacity: 0.4;
  d: path("M11 3v2m5 3l2-2m1 7h2M15 3h.01M21 9h-.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="il6bgobqb"/><path class="cg70mx2mz"/></g>`,
		"fallback": "coolicons:party-popper-duocolor",
	});
}

export default Component;

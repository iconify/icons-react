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
		"content": `<style>.lkq888obw {
  d: path("m9 7l3-4l3 4h4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uxz1l1b3s {
  stroke-opacity: 0.4;
  d: path("M7 12h10M7 16h6");
}
</style><g class="nrj6p8qat"><path class="uxz1l1b3s"/><path class="lkq888obw"/></g>`,
		"fallback": "coolicons:popover-duocolor",
	});
}

export default Component;

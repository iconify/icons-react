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
		"content": `<style>.j6i5yqb-r {
  d: path("M20 5L8 12l12 7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u7pjc2b7b {
  stroke-opacity: 0.4;
  d: path("M4 5v14");
}
</style><g class="nrj6p8qat"><path class="u7pjc2b7b"/><path class="j6i5yqb-r"/></g>`,
		"fallback": "coolicons:skip-back-duocolor-sharp",
	});
}

export default Component;

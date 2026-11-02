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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.obqscbcxp {
  stroke-opacity: 0.4;
  d: path("M3 21h18");
}

.vuymiac5y {
  d: path("m17 12l-2-2l1-6l-1-1l-3 4l-2-1V4L9 3L5 7l1 1h2l1 2l-4 3l1 1l6-1l2 2c2 2 3 2 4 1s1-2-1-4");
}
</style><g class="nrj6p8qat"><path class="obqscbcxp"/><path class="vuymiac5y"/></g>`,
		"fallback": "coolicons:plane-landing-duocolor-sharp",
	});
}

export default Component;

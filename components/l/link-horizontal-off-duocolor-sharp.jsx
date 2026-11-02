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

.w23wm3bzq {
  d: path("M8 8H7a4 4 0 1 0 0 8h2m6-8h2a4 4 0 0 1 4 4c0 .85-.549 1.352-1 2");
}

.yslnx84sq {
  stroke-opacity: 0.4;
  d: path("M8 12h4M2 2l20 20");
}
</style><g class="nrj6p8qat"><path class="yslnx84sq"/><path class="w23wm3bzq"/></g>`,
		"fallback": "coolicons:link-horizontal-off-duocolor-sharp",
	});
}

export default Component;

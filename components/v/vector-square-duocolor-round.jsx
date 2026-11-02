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
		"content": `<style>.f_tftibfv {
  d: path("M7 5h10m2 2v10m-2 2H7m-2-2V7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ys0eq-b5g {
  stroke-opacity: 0.4;
  d: path("M3 5a2 2 0 1 1 4 0a2 2 0 0 1-4 0m14 0a2 2 0 1 1 4 0a2 2 0 0 1-4 0m0 14a2 2 0 1 1 4 0a2 2 0 0 1-4 0M3 19a2 2 0 1 1 4 0a2 2 0 0 1-4 0");
}
</style><g class="nrj6p8qat"><path class="ys0eq-b5g"/><path class="f_tftibfv"/></g>`,
		"fallback": "coolicons:vector-square-duocolor-round",
	});
}

export default Component;

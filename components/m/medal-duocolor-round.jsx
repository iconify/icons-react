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
		"content": `<style>.ajag6ggvt {
  d: path("M7 16a5 5 0 1 0 10 0a5 5 0 0 0-10 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rj_8g4vod {
  stroke-opacity: 0.4;
  d: path("M9 12L6 3h4l2 4l2-4h4l-3 9");
}
</style><g class="nrj6p8qat"><path class="rj_8g4vod"/><path class="ajag6ggvt"/></g>`,
		"fallback": "coolicons:medal-duocolor-round",
	});
}

export default Component;

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
		"content": `<style>.g2f-bwdyl {
  stroke-opacity: 0.4;
  d: path("m15 15l6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zjny6ub8u {
  d: path("M3 10a7 7 0 1 0 14 0a7 7 0 0 0-14 0");
}
</style><g class="nrj6p8qat"><path class="g2f-bwdyl"/><path class="zjny6ub8u"/></g>`,
		"fallback": "coolicons:search-duocolor-round",
	});
}

export default Component;

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

.p9nk_hb0c {
  d: path("M8 20H4V4h16v4");
}

.zdt5grb0s {
  stroke-opacity: 0.4;
  d: path("M15 16a2 2 0 1 1 2 2m0 3h.01");
}
</style><g class="nrj6p8qat"><path class="zdt5grb0s"/><path class="p9nk_hb0c"/></g>`,
		"fallback": "coolicons:note-help-corner-duocolor-sharp",
	});
}

export default Component;

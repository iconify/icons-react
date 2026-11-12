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
		"content": `<style>.bx_mfl4xu {
  stroke-opacity: 0.4;
  d: path("m17 13.4l1.2 2.4l2.8.4l-2 2l.4 2.4l-2.4-1.2l-2.4 1.2l.4-2.4l-2-2l2.8-.4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p9nk_hb0c {
  d: path("M8 20H4V4h16v4");
}
</style><g class="nrj6p8qat"><path class="bx_mfl4xu"/><path class="p9nk_hb0c"/></g>`,
		"fallback": "coolicons:note-star-corner-duocolor-sharp",
	});
}

export default Component;

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
		"content": `<style>.dx7ns0bfk {
  stroke-opacity: 0.4;
  d: path("m11 9l2-2a2.83 2.83 0 0 1 4 0l1 1a2.83 2.83 0 0 1 0 4l-9 9m7-7h2a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H7");
}

.kigplb64b {
  d: path("M3 17V7a4 4 0 1 1 8 0v10a4 4 0 1 1-8 0m4 0h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="dx7ns0bfk"/><path class="kigplb64b"/></g>`,
		"fallback": "coolicons:swatches-duocolor-round",
	});
}

export default Component;

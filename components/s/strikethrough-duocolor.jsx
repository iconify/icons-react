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
		"content": `<style>.ed868obsq {
  d: path("M16 6a5 5 0 1 0-8 6m8 0a5 5 0 0 1-8 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qp-r10b4n {
  stroke-opacity: 0.4;
  d: path("M4 12h16");
}
</style><g class="nrj6p8qat"><path class="qp-r10b4n"/><path class="ed868obsq"/></g>`,
		"fallback": "coolicons:strikethrough-duocolor",
	});
}

export default Component;

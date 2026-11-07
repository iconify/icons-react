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
		"content": `<style>.b4kmbcifq {
  stroke-opacity: 0.4;
  d: path("m16 4l4 4m0-4l-4 4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.sbr48yc6l {
  d: path("M21 13v2a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h4M4 7l3 3c.64.64 1.72 1 3 1h3");
}
</style><g class="nrj6p8qat"><path class="b4kmbcifq"/><path class="sbr48yc6l"/></g>`,
		"fallback": "coolicons:mail-close-duocolor-round",
	});
}

export default Component;

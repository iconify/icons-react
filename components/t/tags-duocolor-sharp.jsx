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

.r1xs12btp {
  stroke-opacity: 0.4;
  d: path("m15 6l6 6l-6 6");
}

.ukw8xsckr {
  d: path("M6 6h3l6 6l-6 6l-6-6V6zm1 4h.01");
}
</style><g class="nrj6p8qat"><path class="r1xs12btp"/><path class="ukw8xsckr"/></g>`,
		"fallback": "coolicons:tags-duocolor-sharp",
	});
}

export default Component;

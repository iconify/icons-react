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
		"content": `<style>.byr2wcn0d {
  d: path("m12 2l10 18H2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.x38s1tb0x {
  stroke-opacity: 0.4;
  d: path("m9 14l2 2l3-4");
}
</style><g class="nrj6p8qat"><path class="x38s1tb0x"/><path class="byr2wcn0d"/></g>`,
		"fallback": "coolicons:triangle-check-duocolor-sharp",
	});
}

export default Component;

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

.faqpx9bxk {
  stroke-opacity: 0.4;
  d: path("m13 11l-3 3h4l-3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="faqpx9bxk"/><path class="byr2wcn0d"/></g>`,
		"fallback": "coolicons:triangle-zap-duocolor-sharp",
	});
}

export default Component;

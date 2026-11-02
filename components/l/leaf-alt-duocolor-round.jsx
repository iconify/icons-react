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
		"content": `<style>.h38a9ebel {
  stroke-opacity: 0.4;
  d: path("M5 21c.1-.7.4-1.8 1-3m0 0c1.5-3 3-6 6-7");
}

.jzf08gbjp {
  d: path("M9 18c6.22 0 10.5-3.29 11-12V4h-4C7 4 4 8 4 13c0 1 0 3 2 5z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="h38a9ebel"/><path class="jzf08gbjp"/></g>`,
		"fallback": "coolicons:leaf-alt-duocolor-round",
	});
}

export default Component;

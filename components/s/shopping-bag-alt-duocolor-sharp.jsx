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
		"content": `<style>.h1ynb0bhj {
  stroke-opacity: 0.4;
  d: path("M15 8a3 3 0 0 1-6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="nrj6p8qat"><path class="h1ynb0bhj"/><path class="w7mc2oblu"/></g>`,
		"fallback": "coolicons:shopping-bag-alt-duocolor-sharp",
	});
}

export default Component;

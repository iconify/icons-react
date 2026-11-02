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
		"content": `<style>.i7bdhbb4s {
  d: path("M5 6h14v15H5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ooyw8-y8g {
  stroke-opacity: 0.4;
  d: path("M9 6a3 3 0 0 1 6 0");
}
</style><g class="nrj6p8qat"><path class="ooyw8-y8g"/><path class="i7bdhbb4s"/></g>`,
		"fallback": "coolicons:shopping-bag-duocolor-sharp",
	});
}

export default Component;

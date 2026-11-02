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

.o-qgb6efn {
  stroke-opacity: 0.4;
  d: path("M2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1M11 9h.01M14 9h.01");
}

.w6rmpgbuw {
  d: path("m4 17l-1-5h18l-1 5M5 12V6h11l3 6M7 6V3");
}
</style><g class="nrj6p8qat"><path class="o-qgb6efn"/><path class="w6rmpgbuw"/></g>`,
		"fallback": "coolicons:ship-side-duocolor-sharp",
	});
}

export default Component;

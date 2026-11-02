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
		"content": `<style>.ekxv2q3-d {
  d: path("M6 6h12v12H6Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.onadeachb {
  stroke-opacity: 0.4;
  d: path("M9 6V3h6v3M9 18v3h6v-3");
}
</style><g class="nrj6p8qat"><path class="onadeachb"/><path class="ekxv2q3-d"/></g>`,
		"fallback": "coolicons:smartwatch-duocolor-sharp",
	});
}

export default Component;

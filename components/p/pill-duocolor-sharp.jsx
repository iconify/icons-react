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
		"content": `<style>.fee-8zjmr {
  stroke-opacity: 0.4;
  d: path("m9 9l-4 4a4.243 4.243 0 0 0 6 6l4-4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vbtgc8bua {
  d: path("m9 9l4-4a4.243 4.243 0 0 1 6 6l-4 4M9 9l6 6");
}
</style><g class="nrj6p8qat"><path class="fee-8zjmr"/><path class="vbtgc8bua"/></g>`,
		"fallback": "coolicons:pill-duocolor-sharp",
	});
}

export default Component;

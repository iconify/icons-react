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
		"content": `<style>.apopyf3ud {
  d: path("M7 19H5V7h14v12h-2m-6 0h2");
}

.lbuse7b4y {
  stroke-opacity: 0.4;
  d: path("M7 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0m6 0a2 2 0 1 0 4 0a2 2 0 0 0-4 0M9 7V3h6v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="lbuse7b4y"/><path class="apopyf3ud"/></g>`,
		"fallback": "coolicons:luggage-duocolor-sharp",
	});
}

export default Component;

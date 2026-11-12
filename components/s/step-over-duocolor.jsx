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
		"content": `<style>.ipx4f3mqs {
  stroke-opacity: 0.4;
  d: path("M16 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p8oxtqbzn {
  d: path("M4 11a7 7 0 0 1 14 0v2m-3-3l3 3l3-3");
}
</style><g class="nrj6p8qat"><path class="ipx4f3mqs"/><path class="p8oxtqbzn"/></g>`,
		"fallback": "coolicons:step-over-duocolor",
	});
}

export default Component;

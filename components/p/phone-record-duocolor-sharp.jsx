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
		"content": `<style>.fag8hwbgy {
  stroke-opacity: 0.4;
  d: path("M15 6a3 3 0 1 0 6 0a3 3 0 0 0-6 0m3 0h.01");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ricnuhbyg {
  d: path("M3 5V3h6l2 5l-3 3l5 5l3-3l5 2v6h-2C10.163 21 3 13.837 3 5");
}
</style><g class="nrj6p8qat"><path class="fag8hwbgy"/><path class="ricnuhbyg"/></g>`,
		"fallback": "coolicons:phone-record-duocolor-sharp",
	});
}

export default Component;

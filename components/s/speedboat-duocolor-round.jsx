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
		"content": `<style>.k2c5x4bmu {
  stroke-opacity: 0.4;
  d: path("M2 20c.5.5 1 1 2 1c2 0 2-2 4-2s2 2 4 2s2-2 4-2s2 2 4 2c1 0 1.5-.5 2-1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o4fe1gbts {
  d: path("m4 17l-1-3h13l5-2l-1 5M5 14V9a2 2 0 0 1 2-2h2l7 7M9 7v7");
}
</style><g class="nrj6p8qat"><path class="k2c5x4bmu"/><path class="o4fe1gbts"/></g>`,
		"fallback": "coolicons:speedboat-duocolor-round",
	});
}

export default Component;

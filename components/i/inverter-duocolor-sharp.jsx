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
		"content": `<style>.h_cavqskd {
  d: path("M4 3h16v18H4Zm5 14h6");
}

.mhypmqbih {
  stroke-opacity: 0.4;
  d: path("M8 11V7h8v4a5 5 0 0 1-8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="mhypmqbih"/><path class="h_cavqskd"/></g>`,
		"fallback": "coolicons:inverter-duocolor-sharp",
	});
}

export default Component;

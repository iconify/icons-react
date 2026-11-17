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
		"content": `<style>.ad-960h2x {
  stroke-opacity: 0.4;
  d: path("M8 11V9a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2a5 5 0 0 1-8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nw7mw3b7p {
  d: path("M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm5 10h6");
}
</style><g class="nrj6p8qat"><path class="ad-960h2x"/><path class="nw7mw3b7p"/></g>`,
		"fallback": "coolicons:inverter-duocolor-round",
	});
}

export default Component;

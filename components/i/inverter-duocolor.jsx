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
		"content": `<style>.anxe6w24s {
  d: path("M4 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Zm5 12h6");
}

.m8263bcor {
  stroke-opacity: 0.4;
  d: path("M8 11V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3a5 5 0 0 1-8 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="m8263bcor"/><path class="anxe6w24s"/></g>`,
		"fallback": "coolicons:inverter-duocolor",
	});
}

export default Component;

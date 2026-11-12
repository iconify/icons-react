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
		"content": `<style>.j024w9uja {
  stroke-opacity: 0.4;
  d: path("M14 8h2m-2 3h1");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p47hv7byv {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 0 0-18 0m7-5v6m-2 2a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><g class="nrj6p8qat"><path class="j024w9uja"/><path class="p47hv7byv"/></g>`,
		"fallback": "coolicons:thermostat-duocolor",
	});
}

export default Component;

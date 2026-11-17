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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.k2lvhdceu {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M7 5a2 2 0 1 1 3.999-.001A2 2 0 0 1 7 5m6 6l3-3v3h-1a3 3 0 0 1 3 3v-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1v-1a3 3 0 0 1-3 3H8a4 4 0 0 1 0-8Z");
}

.tu5_sx12l {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 11h4a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H8a4 4 0 1 1 0-8zm2 0l3-3v3Zm5 2h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1zm-3 1h.01M7 5a2 2 0 1 0 4 0a2 2 0 0 0-4 0m1 14v2m6-2v2");
}
</style><g class="ft5dv1b6b"><path class="k2lvhdceu"/><path class="tu5_sx12l"/></g>`,
		"fallback": "coolicons:piggy-bank-duotone-round",
	});
}

export default Component;

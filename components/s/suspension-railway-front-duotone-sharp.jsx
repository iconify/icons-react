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

.hhj8nsb6i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 20V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1");
}

.ymprvq96p {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 9h14v11H5zm0 5h14M3 4h18M9 4v5m6-5v5m-6 8h.01M15 17h.01");
}
</style><g class="ft5dv1b6b"><path class="hhj8nsb6i"/><path class="ymprvq96p"/></g>`,
		"fallback": "coolicons:suspension-railway-front-duotone-sharp",
	});
}

export default Component;

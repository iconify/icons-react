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

.jy7uio6fo {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 7a3 3 0 0 1 3-3h12a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3m6 13H6a3 3 0 0 1 0-6h3M7 7h.01M7 17h.01M13 17h8m-4-4v8");
}

.x_cv33b3z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M6 4h12a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6m3 16H6a3 3 0 1 1 0-6h3Z");
}
</style><g class="ft5dv1b6b"><path class="x_cv33b3z"/><path class="jy7uio6fo"/></g>`,
		"fallback": "coolicons:server-plus-corner-duotone-round",
	});
}

export default Component;

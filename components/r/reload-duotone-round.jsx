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

.nbjrp86wk {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4.384 12a7.617 7.617 0 1 1 15.233 0a7.617 7.617 0 1 1-15.233 0");
}

.yfaz6x2yi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 9A7.616 7.616 0 0 0 5 9m6 0H5V3m0 12a7.616 7.616 0 0 0 14 0m-6 0h6v6");
}
</style><g class="ft5dv1b6b"><path class="nbjrp86wk"/><path class="yfaz6x2yi"/></g>`,
		"fallback": "coolicons:reload-duotone-round",
	});
}

export default Component;

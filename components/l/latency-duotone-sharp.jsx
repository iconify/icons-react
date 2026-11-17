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

.qoj33f0et {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M5 14a7 7 0 1 0 14 0a7 7 0 0 0-14 0M9 3h6m-3 0v4m-4 7h2l1-3l2 6l1-3h2");
}

.yponibb_c {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 21a7 7 0 1 1 0-14a7 7 0 0 1 0 14");
}
</style><g class="ft5dv1b6b"><path class="yponibb_c"/><path class="qoj33f0et"/></g>`,
		"fallback": "coolicons:latency-duotone-sharp",
	});
}

export default Component;

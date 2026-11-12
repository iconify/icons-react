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

.q6u-df-lg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m12 5l9 2v10L3 21V3z");
}

.vrx6no7om {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m12 5l9 2v10L3 21V3Z");
}
</style><g class="ft5dv1b6b"><path class="vrx6no7om"/><path class="q6u-df-lg"/></g>`,
		"fallback": "coolicons:trapezoid-duotone-round",
	});
}

export default Component;

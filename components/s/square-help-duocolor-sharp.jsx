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
		"content": `<style>.j_psw1y4g {
  d: path("M3 3h18v18H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.obusvlbaq {
  stroke-opacity: 0.4;
  d: path("M9 11a3 3 0 1 1 3 3m0 3h.01");
}
</style><g class="nrj6p8qat"><path class="obusvlbaq"/><path class="j_psw1y4g"/></g>`,
		"fallback": "coolicons:square-help-duocolor-sharp",
	});
}

export default Component;

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
		"content": `<style>.gmv1bpeop {
  d: path("M3 3h18v16H3Zm4 16v2m10-2v2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t6op9z_rl {
  stroke-opacity: 0.4;
  d: path("M8 11a4 4 0 1 1 8 0m0 0a4 4 0 1 1-8 0m4 0h.01");
}
</style><g class="nrj6p8qat"><path class="t6op9z_rl"/><path class="gmv1bpeop"/></g>`,
		"fallback": "coolicons:vault-duocolor-sharp",
	});
}

export default Component;

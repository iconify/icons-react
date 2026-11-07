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
		"content": `<style>.i0807y2wg {
  stroke-opacity: 0.4;
  d: path("m16 10l4-4M2 2l20 20");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.nvvco_bxg {
  d: path("M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2m6 0h8a2 2 0 0 1 2 2v8m-2 4h-7");
}
</style><g class="nrj6p8qat"><path class="i0807y2wg"/><path class="nvvco_bxg"/></g>`,
		"fallback": "coolicons:mail-off-duocolor",
	});
}

export default Component;

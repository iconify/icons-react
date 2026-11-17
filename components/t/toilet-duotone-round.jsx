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

.pfi1avv4n {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 12V6a3 3 0 1 1 6 0v5h10a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5");
}

.y9-6bckfc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 11h16a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5Zm0 0V6a3 3 0 0 1 6 0v5");
}
</style><g class="ft5dv1b6b"><path class="pfi1avv4n"/><path class="y9-6bckfc"/></g>`,
		"fallback": "coolicons:toilet-duotone-round",
	});
}

export default Component;

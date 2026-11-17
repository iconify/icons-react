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
		"content": `<style>.fiup64xoc {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h18v6H3Zm4 3h.01M11 18h.01M16 12v3m-2-6a2.83 2.83 0 0 1 4 0m-7-3a7.07 7.07 0 0 1 10 0");
}

.ft5dv1b6b {
  fill: none;
}

.gmj4pbmbe {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 15h18v6H3Z");
}
</style><g class="ft5dv1b6b"><path class="gmj4pbmbe"/><path class="fiup64xoc"/></g>`,
		"fallback": "coolicons:router-duotone-sharp",
	});
}

export default Component;

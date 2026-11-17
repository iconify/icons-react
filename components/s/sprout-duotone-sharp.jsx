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
		"content": `<style>.b7us8fvra {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3Zm0 4a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Zm0 6V10");
}

.bc-9idbjw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 10v2H9a6 6 0 0 1-6-6V4h3a6 6 0 0 1 6 6m0 4a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3Z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="bc-9idbjw"/><path class="b7us8fvra"/></g>`,
		"fallback": "coolicons:sprout-duotone-sharp",
	});
}

export default Component;

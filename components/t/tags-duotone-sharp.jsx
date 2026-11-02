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
		"content": `<style>.d4ji332vg {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M6 6h3l6 6l-6 6l-6-6V6zm1 4h.01M15 6l6 6l-6 6");
}

.ft5dv1b6b {
  fill: none;
}

.k3jw9sera {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M9 5c.265 0 .52.105.707.293l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6A1 1 0 0 1 2 12V6a1 1 0 0 1 1-1Z");
}
</style><g class="ft5dv1b6b"><path class="k3jw9sera"/><path class="d4ji332vg"/></g>`,
		"fallback": "coolicons:tags-duotone-sharp",
	});
}

export default Component;

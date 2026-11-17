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

.pdfj1qbdz {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h7v5H3Zm0 9h10v5H3Zm11-9h7v5h-7Zm3 9h4v5h-4Z");
}

.ww6wy4a8i {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5h7v5H3Zm11 0h7v5h-7ZM3 14h10v5H3Zm14 0h4v5h-4Z");
}
</style><g class="ft5dv1b6b"><path class="ww6wy4a8i"/><path class="pdfj1qbdz"/></g>`,
		"fallback": "coolicons:text-segments-duotone-sharp",
	});
}

export default Component;

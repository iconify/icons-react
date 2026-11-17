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

.oiladab4b {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 5h2l3 5h13v4h-6l-5 5H8l2-5H5z");
}

.qiuwl7bmg {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5h2l3 5h13v4h-6l-5 5H8l2-5H5Z");
}
</style><g class="ft5dv1b6b"><path class="qiuwl7bmg"/><path class="oiladab4b"/></g>`,
		"fallback": "coolicons:plane-side-duotone-sharp",
	});
}

export default Component;

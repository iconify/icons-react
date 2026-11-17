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

.n8au1wk8q {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 6l6 6l-6 6l-6-6V6Z");
}
</style><g class="ft5dv1b6b"><path class="n8au1wk8q"/><path class="d4ji332vg"/></g>`,
		"fallback": "coolicons:tags-duotone-sharp",
	});
}

export default Component;

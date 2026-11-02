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
		"content": `<style>.b_uz_rghb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6h18M3 12h8m-8 6h8m4-8v8l6-4z");
}

.ft5dv1b6b {
  fill: none;
}

.lccnmmbra {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m15 10l6 4l-6 4Z");
}
</style><g class="ft5dv1b6b"><path class="lccnmmbra"/><path class="b_uz_rghb"/></g>`,
		"fallback": "coolicons:playlist-duotone-sharp",
	});
}

export default Component;

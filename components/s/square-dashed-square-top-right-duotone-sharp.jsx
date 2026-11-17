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

.rauq2q70y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M10 3h11v11H10Z");
}

.wwff0p3rs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6V3h3m15 15v3h-3M6 21H3v-3m11 3h-4m-7-7v-4m7-7h11v11H10Z");
}
</style><g class="ft5dv1b6b"><path class="rauq2q70y"/><path class="wwff0p3rs"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-right-duotone-sharp",
	});
}

export default Component;

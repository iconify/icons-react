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
		"content": `<style>.cp7bxx4rp {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 3h11v11H3Z");
}

.ft5dv1b6b {
  fill: none;
}

.rr230y0hx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M18 3h3v3m0 12v3h-3M6 21H3v-3m18-8v4m-7 7h-4M3 3h11v11H3Z");
}
</style><g class="ft5dv1b6b"><path class="cp7bxx4rp"/><path class="rr230y0hx"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-left-duotone-sharp",
	});
}

export default Component;

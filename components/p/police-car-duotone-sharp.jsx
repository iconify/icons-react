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
		"content": `<style>.aswmuxbwh {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 8V6h2v2m-2 0h2M7 5h1m8 0h1M8 15h.01M16 15h.01M4 18v-6l2-4h12l2 4v6zm2 0h2v2H6Zm10 0h2v2h-2ZM3 12h18");
}

.ft5dv1b6b {
  fill: none;
}

.lx09kxp-v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 18v-6l2-4h12l2 4v6h-2v2h-2v-2H8v2H6v-2Z");
}
</style><g class="ft5dv1b6b"><path class="lx09kxp-v"/><path class="aswmuxbwh"/></g>`,
		"fallback": "coolicons:police-car-duotone-sharp",
	});
}

export default Component;

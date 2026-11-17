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

.q-f3-ovlb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 3h8v18H4Zm4 0v18m8-17l4 16l-4 1l-4-16m0 0l4-1");
}

.x8-7366he {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 3h8v18H4Zm12 18L12 5l4-1l4 16Z");
}
</style><g class="ft5dv1b6b"><path class="x8-7366he"/><path class="q-f3-ovlb"/></g>`,
		"fallback": "coolicons:library-duotone-sharp",
	});
}

export default Component;

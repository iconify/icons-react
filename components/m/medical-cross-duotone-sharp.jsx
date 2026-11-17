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
		"content": `<style>.c-0yq4b9y {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m14 8.536l4.794-2.768l2 3.464L16 12l4.794 2.768l-2 3.464L14 15.464V21h-4v-5.536l-4.794 2.768l-2-3.464L8 12L3.206 9.232l2-3.464L10 8.536V3h4Z");
}

.d790fjbkx {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m14 8.536l4.794-2.768l2 3.464L16 12l4.794 2.768l-2 3.464L14 15.464V21h-4v-5.536l-4.794 2.768l-2-3.464L8 12L3.206 9.232l2-3.464L10 8.536V3h4z");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="c-0yq4b9y"/><path class="d790fjbkx"/></g>`,
		"fallback": "coolicons:medical-cross-duotone-sharp",
	});
}

export default Component;

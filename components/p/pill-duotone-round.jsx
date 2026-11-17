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
		"content": `<style>.e2gfxpb6s {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m9 9l6 6l-4 4a4.242 4.242 0 1 1-6-6Z");
}

.ft5dv1b6b {
  fill: none;
}

.n7wh0zbro {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 9l4-4a4.243 4.243 0 0 1 6 6l-4 4M9 9l6 6M9 9l-4 4a4.243 4.243 0 0 0 6 6l4-4");
}
</style><g class="ft5dv1b6b"><path class="e2gfxpb6s"/><path class="n7wh0zbro"/></g>`,
		"fallback": "coolicons:pill-duotone-round",
	});
}

export default Component;

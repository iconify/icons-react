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
		"content": `<style>.ba7lx04ke {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M15 12v6a3 3 0 1 1-6 0v-6Z");
}

.edww9-bza {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 3v15a3 3 0 0 0 6 0V3M7 3h10m-8 9h6");
}

.ft5dv1b6b {
  fill: none;
}
</style><g class="ft5dv1b6b"><path class="ba7lx04ke"/><path class="edww9-bza"/></g>`,
		"fallback": "coolicons:test-tube-duotone-sharp",
	});
}

export default Component;

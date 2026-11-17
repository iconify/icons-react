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
		"content": `<style>.c0pb1ccsn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m17 3l4 4v14H3V3Z");
}

.ft5dv1b6b {
  fill: none;
}

.jzt02jwik {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 3h14l4 4v14H3zm4 18v-7h10v7M9 7h6");
}
</style><g class="ft5dv1b6b"><path class="c0pb1ccsn"/><path class="jzt02jwik"/></g>`,
		"fallback": "coolicons:save-duotone-sharp",
	});
}

export default Component;

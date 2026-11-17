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
		"content": `<style>.f9f-ziblb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 14v5H3V5h7M3 5l6 6h3m2-7a2.828 2.828 0 1 1 4 4a2.828 2.828 0 0 1-4-4m4 4l3 3");
}

.ft5dv1b6b {
  fill: none;
}

.q7fm4vb8b {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 14v5H3V5h7a6.084 6.084 0 0 0 7.62 6.863l1.259 1.258A3 3 0 0 0 21 14");
}
</style><g class="ft5dv1b6b"><path class="q7fm4vb8b"/><path class="f9f-ziblb"/></g>`,
		"fallback": "coolicons:mail-search-duotone-sharp",
	});
}

export default Component;

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

.wf8-v6ewi {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19H3V5h18v6M3 5l6 6h6l6-6m-7 16v-3l4-4l3 3l-4 4Z");
}

.x64n-hb5o {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M3 5h18v6H10v8H3Zm11 16v-3l4-4l3 3l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="x64n-hb5o"/><path class="wf8-v6ewi"/></g>`,
		"fallback": "coolicons:mail-edit-corner-duotone-sharp",
	});
}

export default Component;

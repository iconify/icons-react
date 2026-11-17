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
		"content": `<style>.e_c2htykb {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M17 20H7v-8h3V8h4v4h3a4 4 0 1 1 0 8M3 12v8m0-4h4m5-8V4h4m-4 12h.01M16 16h.01");
}

.ft5dv1b6b {
  fill: none;
}

.pp_qtj35r {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M17 20H7v-8h3V8h4v4h3a4 4 0 0 1 0 8");
}
</style><g class="ft5dv1b6b"><path class="pp_qtj35r"/><path class="e_c2htykb"/></g>`,
		"fallback": "coolicons:submarine-duotone-sharp",
	});
}

export default Component;

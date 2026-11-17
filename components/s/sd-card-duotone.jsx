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
		"content": `<style>.aqh1fxw_d {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-.64.36-1.36 1-2l2-2c.64-.64 1.36-1 2-1h7a2 2 0 0 1 2 2zm-9-5v3m3-3v3m3-3v3");
}

.ft5dv1b6b {
  fill: none;
}

.ua60p4nfn {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M19 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8c0-.763.48-1.479 1-2l2-2c.521-.52 1.237-1 2-1h7a2 2 0 0 1 2 2Z");
}
</style><g class="ft5dv1b6b"><path class="ua60p4nfn"/><path class="aqh1fxw_d"/></g>`,
		"fallback": "coolicons:sd-card-duotone",
	});
}

export default Component;

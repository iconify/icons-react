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

.lkij6pbxi {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M21 14a4 4 0 0 1-4 4H5c-.738 0-1.369-.631-1-1l5-5c.764-.763 1.959-1 3-1h9Z");
}

.u8l34t4ny {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M21 11v3a4 4 0 0 1-4 4H5c-.738 0-1.369-.631-1-1l5-5c.64-.64 1.72-1 3-1zm0 0V8a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v3");
}
</style><g class="ft5dv1b6b"><path class="lkij6pbxi"/><path class="u8l34t4ny"/></g>`,
		"fallback": "coolicons:iron-duotone-round",
	});
}

export default Component;

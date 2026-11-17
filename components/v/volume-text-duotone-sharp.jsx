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

.l74rlon_t {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 10h3l5-5v14l-5-5h-3zM3 9h6M6 9v6");
}

.xf-i6bc7v {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M13 10h3l5-5v14l-5-5h-3Z");
}
</style><g class="ft5dv1b6b"><path class="xf-i6bc7v"/><path class="l74rlon_t"/></g>`,
		"fallback": "coolicons:volume-text-duotone-sharp",
	});
}

export default Component;

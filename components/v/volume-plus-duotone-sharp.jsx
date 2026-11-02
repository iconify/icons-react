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
		"content": `<style>.em1xchb-v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4v16l-4-4H3V8h4zm4 8h6m-3-3v6");
}

.ft5dv1b6b {
  fill: none;
}

.iiqqoq0_z {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m11 20l-4-4H3V8h4l4-4Z");
}
</style><g class="ft5dv1b6b"><path class="iiqqoq0_z"/><path class="em1xchb-v"/></g>`,
		"fallback": "coolicons:volume-plus-duotone-sharp",
	});
}

export default Component;

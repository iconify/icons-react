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

.ttbgnsu3v {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4 4h16v16H4Zm5 0v16m7-11l-3 3l3 3");
}

.vvgo_wbfy {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M4 4h5v16H4Z");
}
</style><g class="ft5dv1b6b"><path class="vvgo_wbfy"/><path class="ttbgnsu3v"/></g>`,
		"fallback": "coolicons:panel-left-close-duotone-sharp",
	});
}

export default Component;

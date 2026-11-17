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
		"content": `<style>.erapcrzso {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M8 20a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4m-7 13v-3l5-5l3 3l-5 5Z");
}

.ft5dv1b6b {
  fill: none;
}

.uwo0xsbcf {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M8 12v8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4h-8a4 4 0 0 0-4 4m5 9v-3l5-5l3 3l-5 5Z");
}
</style><g class="ft5dv1b6b"><path class="uwo0xsbcf"/><path class="erapcrzso"/></g>`,
		"fallback": "coolicons:note-edit-corner-duotone-round",
	});
}

export default Component;

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
		"content": `<style>.cia66k4bw {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("M12 11a2 2 0 0 0-2 2v6H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4Zm2 10v-3l4-4l3 3l-4 4Z");
}

.ft5dv1b6b {
  fill: none;
}

.shsb8jgov {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M4 6l4 4c.64.64 1.36 1 2 1h4c.64 0 1.36-.36 2-1l4-4m-6 15v-3l4-4l3 3l-4 4Z");
}
</style><g class="ft5dv1b6b"><path class="cia66k4bw"/><path class="shsb8jgov"/></g>`,
		"fallback": "coolicons:mail-edit-corner-duotone",
	});
}

export default Component;

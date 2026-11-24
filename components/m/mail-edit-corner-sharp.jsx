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
		"content": `<style>.s4f5adbdp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10 19H3V5h18v6M3 5l6 6h6l6-6m-7 16v-3l4-4l3 3l-4 4Z");
}
</style><path class="s4f5adbdp"/>`,
		"fallback": "coolicons:mail-edit-corner-sharp",
	});
}

export default Component;

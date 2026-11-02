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
		"content": `<style>.n0d-2_dxy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 15h6v6H3Zm10 2a4 4 0 1 0 8 0a4 4 0 0 0-8 0M8 4l4 6H4Z");
}
</style><path class="n0d-2_dxy"/>`,
		"fallback": "coolicons:shapes-sharp",
	});
}

export default Component;

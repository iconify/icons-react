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
		"content": `<style>.jfitb8wrn {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6 14H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h4M7 7h.01M7 17h.01M14 14l6 6m0-6l-6 6");
}
</style><path class="jfitb8wrn"/>`,
		"fallback": "coolicons:server-close-corner",
	});
}

export default Component;

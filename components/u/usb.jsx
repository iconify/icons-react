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
		"content": `<style>.vlro9p6ts {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m9 6l3-3l3 3m-3-3v14m-4-5l4 4l4-4M4 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0m12-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Zm-6 8a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="vlro9p6ts"/>`,
		"fallback": "coolicons:usb",
	});
}

export default Component;

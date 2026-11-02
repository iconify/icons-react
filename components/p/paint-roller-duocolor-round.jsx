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
		"content": `<style>.j9sgwxzhu {
  d: path("M3 6a3 3 0 0 1 3-3h8a3 3 0 0 1 0 6H6a3 3 0 0 1-3-3");
}

.jj-e3pb_r {
  stroke-opacity: 0.4;
  d: path("M17 6h1a3 3 0 0 1 0 6h-3a3 3 0 0 0-3 3m-2 2a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jj-e3pb_r"/><path class="j9sgwxzhu"/></g>`,
		"fallback": "coolicons:paint-roller-duocolor-round",
	});
}

export default Component;

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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.shku96dgw {
  d: path("M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm3 7a6 6 0 1 0 12 0a6 6 0 0 0-12 0");
}

.u-q_md2ia {
  stroke-opacity: 0.4;
  d: path("M9 12a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m.5 0h.01M14 12a.5.5 0 1 0 1 0a.5.5 0 0 0-1 0m.5 0h.01");
}
</style><g class="nrj6p8qat"><path class="u-q_md2ia"/><path class="shku96dgw"/></g>`,
		"fallback": "coolicons:socket-duocolor",
	});
}

export default Component;

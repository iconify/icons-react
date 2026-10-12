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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.pa8tdbbgc {
  d: path("M12.5 5H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-6.5v-4.75a2.25 2.25 0 0 0 0-4.5Z");
}

.xj6lglbgz {
  d: path("M5 5h7.5v4.75a2.25 2.25 0 0 1 0 4.5V19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="xj6lglbgz"/><path class="pa8tdbbgc"/></g>`,
		"fallback": "iconoven:puzzle-piece",
	});
}

export default Component;

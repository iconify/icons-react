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

.qgm4y23bk {
  stroke-opacity: 0.4;
  d: path("m4 14l8 4l8-4");
}

.tw8j10bcb {
  d: path("m8 8l4-2l8 4l-8 4l-8-4z");
}
</style><g class="nrj6p8qat"><path class="qgm4y23bk"/><path class="tw8j10bcb"/></g>`,
		"fallback": "coolicons:layer-duocolor",
	});
}

export default Component;

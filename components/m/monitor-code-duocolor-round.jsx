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

.s11dw4bis {
  stroke-opacity: 0.4;
  d: path("m10 8.5l-2 2l2 2m4-4l2 2l-2 2");
}

.w9a6t4fsv {
  d: path("M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4Zm5 12h6");
}
</style><g class="nrj6p8qat"><path class="s11dw4bis"/><path class="w9a6t4fsv"/></g>`,
		"fallback": "coolicons:monitor-code-duocolor-round",
	});
}

export default Component;

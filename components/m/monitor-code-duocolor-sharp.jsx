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

.poo2p_bsk {
  d: path("M4 4h16v13H4Zm5 16h6");
}

.s11dw4bis {
  stroke-opacity: 0.4;
  d: path("m10 8.5l-2 2l2 2m4-4l2 2l-2 2");
}
</style><g class="nrj6p8qat"><path class="s11dw4bis"/><path class="poo2p_bsk"/></g>`,
		"fallback": "coolicons:monitor-code-duocolor-sharp",
	});
}

export default Component;

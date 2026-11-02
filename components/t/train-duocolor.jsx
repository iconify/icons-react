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
		"content": `<style>.b0n92mbin {
  stroke-opacity: 0.4;
  d: path("M9 14h.01M15 14h.01");
}

.bw_masbtw {
  d: path("M12 17H7a2 2 0 0 1-2-2V7c0-.64.36-1.36 1-2l1-1c.64-.64 1.36-1 2-1h6c.64 0 1.36.36 2 1l1 1c.64.64 1 1.36 1 2v8a2 2 0 0 1-2 2zm-4 0l-2 4m10-4l2 4M5 10h14");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b0n92mbin"/><path class="bw_masbtw"/></g>`,
		"fallback": "coolicons:train-duocolor",
	});
}

export default Component;

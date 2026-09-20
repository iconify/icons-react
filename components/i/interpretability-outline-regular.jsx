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
		"content": `<style>.g_w90ac2s {
  d: path("M10 15a4 4 0 1 0 8 0 4 4 0 1 0 -8 0");
}

.jzfjzbcmq {
  d: path("M14 3h3a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V6l3 -3h3");
}

.l-37rlmum {
  d: path("m17 18 3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jzfjzbcmq"/><path class="g_w90ac2s"/><path class="l-37rlmum"/></g>`,
		"fallback": "iconmind:interpretability-outline-regular",
	});
}

export default Component;

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

.oc5lclbat {
  d: path("M4 11h16a6 6 0 0 1-6 6v2a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-2a5 5 0 0 1-5-5Z");
}

.vlr_v_vbw {
  stroke-opacity: 0.4;
  d: path("M4 11V6a3 3 0 0 1 6 0v5");
}
</style><g class="nrj6p8qat"><path class="vlr_v_vbw"/><path class="oc5lclbat"/></g>`,
		"fallback": "coolicons:toilet-duocolor-round",
	});
}

export default Component;

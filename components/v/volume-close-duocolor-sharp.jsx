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
		"content": `<style>.eiuvhjh8d {
  stroke-opacity: 0.4;
  d: path("m15 9l6 6m0-6l-6 6");
}

.l2emg7y9m {
  d: path("M11 4v16l-4-4H3V8h4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="eiuvhjh8d"/><path class="l2emg7y9m"/></g>`,
		"fallback": "coolicons:volume-close-duocolor-sharp",
	});
}

export default Component;

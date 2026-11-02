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
		"content": `<style>.l2emg7y9m {
  d: path("M11 4v16l-4-4H3V8h4z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.zc9yrzbrg {
  stroke-opacity: 0.4;
  d: path("M15 8a7.21 7.21 0 0 1 0 8m3-11a11.4 11.4 0 0 1 0 14");
}
</style><g class="nrj6p8qat"><path class="zc9yrzbrg"/><path class="l2emg7y9m"/></g>`,
		"fallback": "coolicons:volume-high-duocolor-sharp",
	});
}

export default Component;

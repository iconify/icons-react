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

.suobsmife {
  stroke-opacity: 0.4;
  d: path("M15 12h6m-3-3v6");
}
</style><g class="nrj6p8qat"><path class="suobsmife"/><path class="l2emg7y9m"/></g>`,
		"fallback": "coolicons:volume-plus-duocolor-sharp",
	});
}

export default Component;

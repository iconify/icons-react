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
		"content": `<style>.k0u7_ccwm {
  stroke-opacity: 0.4;
  d: path("M12 17v4M4 2l18 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qkg17wbok {
  d: path("M11 3h5a2 2 0 1 1 0 4c-.276 0 .181-.181 0 0m3 10c-.181.181-.724 0-1 0H6a1 1 0 0 1-1-1v-1c0-2 4-2 4-4V8a1 1 0 0 0-1-1a2 2 0 0 1-2-2c0-.293-.114-.749 0-1");
}
</style><g class="nrj6p8qat"><path class="k0u7_ccwm"/><path class="qkg17wbok"/></g>`,
		"fallback": "coolicons:pin-off-duocolor-sharp",
	});
}

export default Component;

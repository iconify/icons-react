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
		"content": `<style>.a57wzobvd {
  stroke-opacity: 0.4;
  d: path("m12 13l4 8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qhevnvmwo {
  d: path("M4 17a8.944 8.944 0 1 1 16-8Zm-1 4h18");
}
</style><g class="nrj6p8qat"><path class="a57wzobvd"/><path class="qhevnvmwo"/></g>`,
		"fallback": "coolicons:parasol-duocolor-sharp",
	});
}

export default Component;

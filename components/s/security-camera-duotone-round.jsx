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
		"content": `<style>.ft5dv1b6b {
  fill: none;
}

.iq2ejkbvs {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M4.014 10.105A3 3 0 0 1 6.135 6.43l9.66-2.588a3 3 0 0 1 3.674 2.122l.517 1.931a3 3 0 0 1-2.121 3.675l-9.66 2.588a3 3 0 0 1-3.674-2.122ZM12 13.14V17h7m0-1v5M15.605 6.999l.518 1.932");
}

.qnabwxmoh {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-2, 0.2);
  d: path("m6.135 6.43l9.659-2.588a3 3 0 0 1 3.675 2.122l.517 1.931a3 3 0 0 1-2.121 3.675l-9.659 2.588a3 3 0 0 1-3.675-2.122l-.517-1.931A3 3 0 0 1 6.135 6.43");
}
</style><g class="ft5dv1b6b"><path class="qnabwxmoh"/><path class="iq2ejkbvs"/></g>`,
		"fallback": "coolicons:security-camera-duotone-round",
	});
}

export default Component;

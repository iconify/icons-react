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
		"content": `<style>.mb86pob5t {
  stroke-opacity: 0.4;
  d: path("m3 5l6 6h6l6-6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ztrhk2p1s {
  d: path("M12 19H3V5h18v14z");
}
</style><g class="nrj6p8qat"><path class="mb86pob5t"/><path class="ztrhk2p1s"/></g>`,
		"fallback": "coolicons:mail-duocolor-sharp",
	});
}

export default Component;

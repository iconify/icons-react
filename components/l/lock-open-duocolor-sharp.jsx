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
		"content": `<style>.gwg36obxh {
  d: path("M4 9h16v12H4Zm7 6a1 1 0 1 0 2 0a1 1 0 0 0-2 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.smd2290dp {
  stroke-opacity: 0.4;
  d: path("M8 9V7a4 4 0 0 1 7.464-2");
}
</style><g class="nrj6p8qat"><path class="smd2290dp"/><path class="gwg36obxh"/></g>`,
		"fallback": "coolicons:lock-open-duocolor-sharp",
	});
}

export default Component;

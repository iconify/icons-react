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
		"content": `<style>.ifns3qbmc {
  d: path("M18 3h3v3m0 12v3h-3M6 21H3v-3m18-8v4m-7 7h-4");
}

.jru4xkb0p {
  stroke-opacity: 0.4;
  d: path("M3 3h11v11H3Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jru4xkb0p"/><path class="ifns3qbmc"/></g>`,
		"fallback": "coolicons:square-dashed-square-top-left-duocolor-sharp",
	});
}

export default Component;

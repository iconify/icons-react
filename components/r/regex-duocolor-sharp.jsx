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
		"content": `<style>.b14gb-b4p {
  stroke-opacity: 0.4;
  d: path("M3 19a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pckj867pf {
  d: path("M16 3v10m-4-8l8 6m-8 0l8-6");
}
</style><g class="nrj6p8qat"><path class="b14gb-b4p"/><path class="pckj867pf"/></g>`,
		"fallback": "coolicons:regex-duocolor-sharp",
	});
}

export default Component;

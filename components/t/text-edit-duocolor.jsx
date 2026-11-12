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
		"content": `<style>.fm21oiyer {
  stroke-opacity: 0.4;
  d: path("m3 21l3-3l3 3m4 0h8");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ruaxyzbtr {
  d: path("M9 15v-3l8-8a1.414 1.414 0 0 1 2 0l1 1a1.414 1.414 0 0 1 0 2l-8 8zm6-9l3 3");
}
</style><g class="nrj6p8qat"><path class="fm21oiyer"/><path class="ruaxyzbtr"/></g>`,
		"fallback": "coolicons:text-edit-duocolor",
	});
}

export default Component;

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
		"content": `<style>.b6z_6gb_e {
  stroke-opacity: 0.4;
  d: path("M3 18a2 2 0 0 1 2-2h14a2 2 0 1 1 0 4H5a2 2 0 0 1-2-2");
}

.m8zpg_7wh {
  d: path("M5 16V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="b6z_6gb_e"/><path class="m8zpg_7wh"/></g>`,
		"fallback": "coolicons:laptop-duocolor",
	});
}

export default Component;

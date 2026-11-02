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
		"content": `<style>.ngtiubbgl {
  stroke-opacity: 0.4;
  d: path("M9 15v-3l9-9l3 3l-9 9Zm6-9l3 3");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vfb_mpb2c {
  d: path("M11 4H8a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-3");
}
</style><g class="nrj6p8qat"><path class="ngtiubbgl"/><path class="vfb_mpb2c"/></g>`,
		"fallback": "coolicons:note-edit-duocolor-round",
	});
}

export default Component;

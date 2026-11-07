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
		"content": `<style>.c-szcib2v {
  d: path("M6 17a3 3 0 1 0 6 0a3 3 0 0 0-6 0m6 0V6c0-.919 1.081-1.46 2-1l4 2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.xxlq3mw-f {
  stroke-opacity: 0.4;
  d: path("m12 9l4 2");
}
</style><g class="nrj6p8qat"><path class="xxlq3mw-f"/><path class="c-szcib2v"/></g>`,
		"fallback": "coolicons:music-note-double-duocolor",
	});
}

export default Component;

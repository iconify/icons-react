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
		"content": `<style>.gvs6g-b0k {
  d: path("M9.5 7.5h5v5h-5Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}
</style><g class="nrj6p8qat"><path class="qad3kqbgr"/><path class="gvs6g-b0k"/></g>`,
		"fallback": "iconmind:pin-end-outline-regular",
	});
}

export default Component;

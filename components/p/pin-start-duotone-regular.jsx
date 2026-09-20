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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p67gkiiyp {
  fill: currentColor;
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.q8csr05_q {
  d: path("m10 7 3 3 -3 3Z");
}

.qad3kqbgr {
  d: path("M4 10a8 8 0 0 1 16 0l-8 8Z");
}

.rqngqutir {
  fill: currentColor;
  d: path("m10 7 3 3 -3 3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="p67gkiiyp"/><path class="rqngqutir"/><path class="qad3kqbgr"/><path class="q8csr05_q"/></g>`,
		"fallback": "iconmind:pin-start-duotone-regular",
	});
}

export default Component;

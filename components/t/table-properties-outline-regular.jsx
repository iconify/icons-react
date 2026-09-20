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
		"content": `<style>.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pfakvcc9e {
  d: path("M9 15h13");
}

.t87ohzbeq {
  d: path("M9 4v16");
}

.w9es-hz-w {
  d: path("M9 9h13");
}
</style><g class="nrj6p8qat"><path class="n48w5yb-p"/><path class="t87ohzbeq"/><path class="w9es-hz-w"/><path class="pfakvcc9e"/></g>`,
		"fallback": "iconmind:table-properties-outline-regular",
	});
}

export default Component;

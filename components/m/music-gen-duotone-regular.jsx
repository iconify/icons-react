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
		"content": `<style>.c2-8r0bdi {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m16 9 -4 -4v12a3 3 0 1 1 -6 0 3 3 0 1 1 6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.h5sy48j_j {
  d: path("m16 9 -4 -4v12a3 3 0 1 1 -6 0 3 3 0 1 1 6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c2-8r0bdi"/><path class="h5sy48j_j"/></g>`,
		"fallback": "iconmind:music-gen-duotone-regular",
	});
}

export default Component;

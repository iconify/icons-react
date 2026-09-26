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
		"content": `<style>.cvru1isjg {
  d: path("M9 8V16M15 8V16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.u4yt2i7xs {
  fill: currentColor;
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M2 6C2 3.790861 3.790861 2 6 2L18 2C20.209139 2 22 3.790861 22 6L22 18C22 20.209139 20.209139 22 18 22L6 22C3.790861 22 2 20.209139 2 18Z");
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="u4yt2i7xs"/><path class="cvru1isjg"/></g>`,
		"fallback": "keyline-icons:square-pause-duotone",
	});
}

export default Component;

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
		"content": `<style>.bfp2j21qb {
  fill: currentColor;
  d: path("M14 8h8v8h-8Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oowiv7bzr {
  d: path("M14 8h8v8h-8Z");
}

.p39ktbcba {
  d: path("m7 8 4 4 -4 4 -4 -4Z");
}

.w2ed1xbxm {
  fill: currentColor;
  d: path("m7 8 4 4 -4 4 -4 -4Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="w2ed1xbxm"/><path class="bfp2j21qb"/><path class="p39ktbcba"/><path class="oowiv7bzr"/></g>`,
		"fallback": "iconmind:model-halt-duotone-regular",
	});
}

export default Component;

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
		"content": `<style>.iymet_cml {
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.okn_-yuok {
  fill: currentColor;
  d: path("M9 9h6v3l-3 3 -3 -3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.t-y1ijbfb {
  d: path("M9 9h6v3l-3 3 -3 -3Z");
}

.y1z1czbul {
  fill: currentColor;
  d: path("M15.5 4H19a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V8l4 -4h3.5");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="y1z1czbul"/><path class="okn_-yuok"/><path class="iymet_cml"/><path class="t-y1ijbfb"/></g>`,
		"fallback": "iconmind:rasp-duotone-regular",
	});
}

export default Component;

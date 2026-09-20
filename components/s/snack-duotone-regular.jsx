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
		"content": `<style>.gfdpeof0d {
  d: path("M9 7v10");
}

.gpjewxcth {
  d: path("M4 9a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ny-7zp4sl {
  fill: currentColor;
  d: path("M4 9a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.rutulxlvn {
  d: path("M14 7v10");
}
</style><g class="nrj6p8qat"><path class="ny-7zp4sl"/><path class="gpjewxcth"/><path class="gfdpeof0d"/><path class="rutulxlvn"/></g>`,
		"fallback": "iconmind:snack-duotone-regular",
	});
}

export default Component;

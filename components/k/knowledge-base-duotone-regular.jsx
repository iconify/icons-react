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
		"content": `<style>.b67rpbc4v {
  fill: currentColor;
  d: path("M14 4h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h3");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.gg9qhlhxo {
  d: path("M8 4v16");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.z72a6tw4t {
  d: path("M14 4h3a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H7a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h3");
}
</style><g class="nrj6p8qat"><path class="b67rpbc4v"/><path class="z72a6tw4t"/><path class="gg9qhlhxo"/></g>`,
		"fallback": "iconmind:knowledge-base-duotone-regular",
	});
}

export default Component;

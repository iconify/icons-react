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
		"content": `<style>.d269etb2f {
  d: path("M6 3v14h10V3Z");
}

.iu1vklb-k {
  d: path("M9 8a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.rrvudvrpy {
  d: path("m16 15 4 4v3");
}
</style><g class="nrj6p8qat"><path class="d269etb2f"/><path class="iu1vklb-k"/><path class="rrvudvrpy"/></g>`,
		"fallback": "iconmind:selfie-outline-regular",
	});
}

export default Component;

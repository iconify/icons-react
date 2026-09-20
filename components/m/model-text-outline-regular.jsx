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
		"content": `<style>.ltxni2ncy {
  d: path("M14 12h7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.p39ktbcba {
  d: path("m7 8 4 4 -4 4 -4 -4Z");
}

.vg0qlegui {
  d: path("M14 17h7");
}

.xrit8bb9e {
  d: path("M14 7h7");
}
</style><g class="nrj6p8qat"><path class="p39ktbcba"/><path class="xrit8bb9e"/><path class="ltxni2ncy"/><path class="vg0qlegui"/></g>`,
		"fallback": "iconmind:model-text-outline-regular",
	});
}

export default Component;

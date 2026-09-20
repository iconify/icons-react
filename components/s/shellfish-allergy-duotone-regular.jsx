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
		"content": `<style>.g6hskxb9z {
  fill: currentColor;
  d: path("M4 18a8 8 0 0 1 16 0Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.myt_b32pc {
  d: path("M4 18a8 8 0 0 1 16 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y29zmn0-m {
  d: path("M5 20 19 6");
}
</style><g class="nrj6p8qat"><path class="g6hskxb9z"/><path class="myt_b32pc"/><path class="y29zmn0-m"/></g>`,
		"fallback": "iconmind:shellfish-allergy-duotone-regular",
	});
}

export default Component;

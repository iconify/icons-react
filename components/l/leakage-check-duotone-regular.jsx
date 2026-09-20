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
		"content": `<style>.mo1bh2_2m {
  d: path("M9 12.5h6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.s1pdfd1ij {
  d: path("M9.5 14.5 12 17l2.5 -2.5");
}

.sgjb9gifn {
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
}

.z640i9ymj {
  fill: currentColor;
  d: path("M9 3v7l-5 5v4h16v-4l-5 -5V3Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="z640i9ymj"/><path class="sgjb9gifn"/><path class="mo1bh2_2m"/><path class="s1pdfd1ij"/></g>`,
		"fallback": "iconmind:leakage-check-duotone-regular",
	});
}

export default Component;

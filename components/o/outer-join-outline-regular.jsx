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
		"content": `<style>.c4ksau0lb {
  d: path("M14 3h5");
}

.d8vl7nsmr {
  d: path("M2 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.kywmzznkm {
  d: path("M11 12a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0 -11 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.pjw5o-b4z {
  d: path("M5 3h5");
}
</style><g class="nrj6p8qat"><path class="d8vl7nsmr"/><path class="kywmzznkm"/><path class="pjw5o-b4z"/><path class="c4ksau0lb"/></g>`,
		"fallback": "iconmind:outer-join-outline-regular",
	});
}

export default Component;

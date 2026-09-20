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
		"content": `<style>.fi3uhubah {
  fill: currentColor;
  d: path("m19 13 2 -2 -4 -4 -2 2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.jdo7z8-qu {
  d: path("m3 21 9 -9");
}

.k5x2esuhl {
  fill: currentColor;
  d: path("m12 12 3 -3 4 4 -3 3Z");
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

.w-bnpitut {
  d: path("m12 12 3 -3 4 4 -3 3Z");
}

.ws24-9bwu {
  d: path("m19 13 2 -2 -4 -4 -2 2Z");
}
</style><g class="nrj6p8qat"><path class="k5x2esuhl"/><path class="fi3uhubah"/><path class="jdo7z8-qu"/><path class="w-bnpitut"/><path class="ws24-9bwu"/></g>`,
		"fallback": "iconmind:paintbrush-duotone-regular",
	});
}

export default Component;

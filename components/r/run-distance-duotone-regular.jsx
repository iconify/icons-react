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
		"content": `<style>.fvc8noqew {
  d: path("M16 3h4v4h-4");
}

.hjdsycb3x {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m2 21 5 -5v-4l5 -5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.y60rjib_g {
  d: path("m2 21 5 -5v-4l5 -5h4");
}

.z96vn00py {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 3h4v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="hjdsycb3x"/><path class="z96vn00py"/><path class="y60rjib_g"/><path class="fvc8noqew"/></g>`,
		"fallback": "iconmind:run-distance-duotone-regular",
	});
}

export default Component;

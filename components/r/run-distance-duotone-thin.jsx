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

.hcndpabaq {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M16 3h4v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oaqnt5b7k {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("m2 21 5 -5v-4l5 -5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y60rjib_g {
  d: path("m2 21 5 -5v-4l5 -5h4");
}
</style><g class="hntgybcog"><path class="oaqnt5b7k"/><path class="hcndpabaq"/><path class="y60rjib_g"/><path class="fvc8noqew"/></g>`,
		"fallback": "iconmind:run-distance-duotone-thin",
	});
}

export default Component;

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

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y60rjib_g {
  d: path("m2 21 5 -5v-4l5 -5h4");
}
</style><g class="hntgybcog"><path class="y60rjib_g"/><path class="fvc8noqew"/></g>`,
		"fallback": "iconmind:run-distance-outline-thin",
	});
}

export default Component;

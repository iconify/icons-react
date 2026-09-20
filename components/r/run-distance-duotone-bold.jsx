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

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.w666u8mnq {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("m2 21 5 -5v-4l5 -5h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y066vs5-g {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M16 3h4v4h-4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.y60rjib_g {
  d: path("m2 21 5 -5v-4l5 -5h4");
}
</style><g class="s0phu2bbs"><path class="w666u8mnq"/><path class="y066vs5-g"/><path class="y60rjib_g"/><path class="fvc8noqew"/></g>`,
		"fallback": "iconmind:run-distance-duotone-bold",
	});
}

export default Component;

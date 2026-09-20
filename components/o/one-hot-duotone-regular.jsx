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
		"content": `<style>.ct8-554vp {
  d: path("M11 6v12");
}

.j93aodlin {
  fill: currentColor;
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.l2x-_sd5q {
  d: path("M3 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.olmwgycdy {
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.unova7b3b {
  fill: currentColor;
  d: path("M15 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.xc0m8sbll {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M11 6v12");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="nrj6p8qat"><path class="j93aodlin"/><path class="unova7b3b"/><path class="xc0m8sbll"/><path class="l2x-_sd5q"/><path class="ct8-554vp"/><path class="olmwgycdy"/></g>`,
		"fallback": "iconmind:one-hot-duotone-regular",
	});
}

export default Component;

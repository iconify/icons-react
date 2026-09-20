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
		"content": `<style>.bj7dvbcia {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M8 21V8a4 4 0 0 1 8 0");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.c1ganhbov {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M5 21h6");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.v9bmzbkdm {
  d: path("M5 21h6");
}

.x5t19bc6r {
  d: path("M8 21V8a4 4 0 0 1 8 0");
}
</style><g class="nrj6p8qat"><path class="bj7dvbcia"/><path class="c1ganhbov"/><path class="x5t19bc6r"/><path class="v9bmzbkdm"/></g>`,
		"fallback": "iconmind:walking-stick-duotone-regular",
	});
}

export default Component;

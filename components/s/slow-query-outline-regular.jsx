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
		"content": `<style>.f_-gw6caf {
  d: path("M11 7v4");
}

.gh7xyhbdv {
  d: path("M11 11h3");
}

.llc-u9kbe {
  d: path("M5 11a6 6 0 1 0 12 0 6 6 0 1 0 -12 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.yjzepunpt {
  d: path("M15.5 15.5 20 20");
}
</style><g class="nrj6p8qat"><path class="llc-u9kbe"/><path class="yjzepunpt"/><path class="f_-gw6caf"/><path class="gh7xyhbdv"/></g>`,
		"fallback": "iconmind:slow-query-outline-regular",
	});
}

export default Component;

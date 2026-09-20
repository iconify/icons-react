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
		"content": `<style>.a2wn47b0j {
  fill: currentColor;
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.mil5mpb-p {
  fill: currentColor;
  d: path("M14 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.myekf3bzc {
  d: path("M4 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.qnps6eb_y {
  d: path("M4 19a8 8 0 0 1 16 0");
}

.rrxso7m3p {
  d: path("M14 8a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}
</style><g class="nrj6p8qat"><path class="a2wn47b0j"/><path class="mil5mpb-p"/><path class="myekf3bzc"/><path class="rrxso7m3p"/><path class="qnps6eb_y"/></g>`,
		"fallback": "iconmind:sibling-duotone-regular",
	});
}

export default Component;

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
		"content": `<style>.cj8gecc7a {
  d: path("M7 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.cmfydpaql {
  d: path("M10 17v3");
}

.fh46dtjbs {
  d: path("M5 12a7 7 0 0 1 14 0v3a2 2 0 0 1 -2 2H7a2 2 0 0 1 -2 -2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ufjf60bpr {
  d: path("M13 11a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.xzo2fg5pj {
  d: path("M14 17v3");
}
</style><g class="nrj6p8qat"><path class="fh46dtjbs"/><path class="cj8gecc7a"/><path class="ufjf60bpr"/><path class="cmfydpaql"/><path class="xzo2fg5pj"/></g>`,
		"fallback": "iconmind:skeleton-outline-regular",
	});
}

export default Component;

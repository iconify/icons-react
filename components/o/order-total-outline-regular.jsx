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
		"content": `<style>.cta_b6xgu {
  d: path("M14.5 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g-zzhsbrv {
  d: path("M7 10h6");
}

.h2fnwccfy {
  d: path("M7 6h10");
}

.jd_dotbnq {
  d: path("M6 2h12a2 2 0 0 1 2 2v15l-2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2 -2 -2 -2 2V4a2 2 0 0 1 2 -2");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="jd_dotbnq"/><path class="h2fnwccfy"/><path class="g-zzhsbrv"/><path class="cta_b6xgu"/></g>`,
		"fallback": "iconmind:order-total-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.a3eibhdgt {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0");
}

.f-6kshnwt {
  d: path("M11 12.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.g7e-mbajx {
  d: path("M15 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.k7llgzrde {
  d: path("M10 18.5a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.odwdycbcr {
  d: path("M7 14.5a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.z26gfvqcs {
  d: path("M4.5 9.5h15");
}
</style><g class="nrj6p8qat"><path class="a3eibhdgt"/><path class="z26gfvqcs"/><path class="odwdycbcr"/><path class="f-6kshnwt"/><path class="g7e-mbajx"/><path class="k7llgzrde"/></g>`,
		"fallback": "iconmind:pet-cover-outline-regular",
	});
}

export default Component;

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
		"content": `<style>.bo51iypxr {
  d: path("M10 12a2 2 0 1 0 4 0 2 2 0 1 0 -4 0");
}

.ffs26fbkv {
  d: path("M12 17v4");
}

.irm-6r_xs {
  d: path("M3 17v4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.piohzog1p {
  d: path("M3 19h9");
}

.rp243mbkd {
  d: path("M6.36 9.95a6 6 0 0 1 11.28 0");
}
</style><g class="nrj6p8qat"><path class="rp243mbkd"/><path class="bo51iypxr"/><path class="piohzog1p"/><path class="irm-6r_xs"/><path class="ffs26fbkv"/></g>`,
		"fallback": "iconmind:visibility-low-outline-regular",
	});
}

export default Component;

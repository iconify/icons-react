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
		"content": `<style>.bn_pu6j-z {
  d: path("M20 7v13H4V4h5l3 3h4");
}

.kbipvwbid {
  d: path("m14.5 11 -5 5");
}

.mzd0obbcu {
  d: path("m9.5 11 5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="bn_pu6j-z"/><path class="mzd0obbcu"/><path class="kbipvwbid"/></g>`,
		"fallback": "iconmind:right-to-erasure-outline-regular",
	});
}

export default Component;

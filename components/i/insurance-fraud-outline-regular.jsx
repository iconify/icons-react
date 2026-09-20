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
		"content": `<style>.i9l4plpqw {
  d: path("m14.5 12.5 -5 5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.t44wjkbxu {
  d: path("m9.5 12.5 5 5");
}

.y7d97_qtf {
  d: path("M9.5 4h5v2.5L18 10a7 7 0 1 1 -12 0l3.5 -3.5Z");
}
</style><g class="nrj6p8qat"><path class="y7d97_qtf"/><path class="t44wjkbxu"/><path class="i9l4plpqw"/></g>`,
		"fallback": "iconmind:insurance-fraud-outline-regular",
	});
}

export default Component;

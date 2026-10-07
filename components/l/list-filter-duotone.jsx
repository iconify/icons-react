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
		"content": `<style>.d_bw9tbze {
  d: path("M6 12L18 12M10 18L14 18");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.wn473ibit {
  stroke-opacity: 0.4;
  d: path("M2 6L22 6");
}
</style><g class="nrj6p8qat"><path class="wn473ibit"/><path class="d_bw9tbze"/></g>`,
		"fallback": "keyline-icons:list-filter-duotone",
	});
}

export default Component;

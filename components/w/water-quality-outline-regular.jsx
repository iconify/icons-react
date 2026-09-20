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
		"content": `<style>.lwmow_bne {
  d: path("m12 4 8 8a8 8 0 0 1 -16 0Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uogqi4bmc {
  d: path("m8 13 3 3 5 -5");
}
</style><g class="nrj6p8qat"><path class="lwmow_bne"/><path class="uogqi4bmc"/></g>`,
		"fallback": "iconmind:water-quality-outline-regular",
	});
}

export default Component;

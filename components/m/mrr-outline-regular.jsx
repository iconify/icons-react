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
		"content": `<style>.bu4zjnbek {
  d: path("M9.5 10H13");
}

.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.hqwqevb6s {
  d: path("M6.5 10a1 1 0 1 0 2 0 1 1 0 1 0 -2 0");
}

.kfdmhd64i {
  d: path("m15 15 6 6");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="hqwqevb6s"/><path class="bu4zjnbek"/></g>`,
		"fallback": "iconmind:mrr-outline-regular",
	});
}

export default Component;

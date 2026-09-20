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
		"content": `<style>.d7edxnn1x {
  d: path("M5.5 10H8l2.5 -2.5H13");
}

.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
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

.s00zhtbiw {
  d: path("m8 10 2.5 2.5H13");
}
</style><g class="nrj6p8qat"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="d7edxnn1x"/><path class="s00zhtbiw"/></g>`,
		"fallback": "iconmind:query-decompose-outline-regular",
	});
}

export default Component;

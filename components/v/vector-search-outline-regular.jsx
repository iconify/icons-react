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
		"content": `<style>.ffw_pwyfz {
  d: path("M12.62 3.5a7 7 0 1 1 -5.24 0");
}

.jrz67unam {
  d: path("m7 13 6 -6");
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

.nz1-89h8c {
  d: path("M10 7h3v3");
}
</style><g class="nrj6p8qat"><path class="ffw_pwyfz"/><path class="kfdmhd64i"/><path class="jrz67unam"/><path class="nz1-89h8c"/></g>`,
		"fallback": "iconmind:vector-search-outline-regular",
	});
}

export default Component;

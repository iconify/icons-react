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
		"content": `<style>.fh1f3mbrg {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M3 8V3h5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.hhryeubon {
  d: path("M3 8V3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oi0elobpe {
  d: path("M16 21h5v-5");
}

.p3_1tlb1z {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("m5 16 4 -4 3 3 4 -4 3 3");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.trdu21b1c {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M16 21h5v-5");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.wpfzotbdn {
  d: path("m5 16 4 -4 3 3 4 -4 3 3");
}
</style><g class="nrj6p8qat"><path class="fh1f3mbrg"/><path class="trdu21b1c"/><path class="p3_1tlb1z"/><path class="hhryeubon"/><path class="oi0elobpe"/><path class="wpfzotbdn"/></g>`,
		"fallback": "iconmind:sparkline-duotone-regular",
	});
}

export default Component;

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
		"content": `<style>.d5czi6rdr {
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
}

.eg-tf0b6t {
  d: path("M9 13v5");
}

.g7cpaab_q {
  d: path("m6 9 3 -3 3 3 2 -2 2 2");
}

.i4l6z3b8k {
  d: path("M15 13v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.utcr20lug {
  d: path("M12 13v5");
}

.uw3g4ocav {
  fill: currentColor;
  d: path("M3 4a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H5a2 2 0 0 1 -2 -2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}
</style><g class="nrj6p8qat"><path class="uw3g4ocav"/><path class="d5czi6rdr"/><path class="g7cpaab_q"/><path class="eg-tf0b6t"/><path class="utcr20lug"/><path class="i4l6z3b8k"/></g>`,
		"fallback": "iconmind:sku-duotone-regular",
	});
}

export default Component;

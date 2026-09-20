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
		"content": `<style>.ez2gnf3cn {
  d: path("M9.5 11 12 8.5l2.5 2.5");
}

.l8dn9jbyp {
  d: path("M2 15h20");
}

.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="n48w5yb-p"/><path class="l8dn9jbyp"/><path class="ez2gnf3cn"/></g>`,
		"fallback": "iconmind:panel-bottom-open-outline-regular",
	});
}

export default Component;

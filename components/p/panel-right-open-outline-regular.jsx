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
		"content": `<style>.n48w5yb-p {
  d: path("M14 4h5a3 3 0 0 1 3 3v10a3 3 0 0 1 -3 3H5a3 3 0 0 1 -3 -3V7a3 3 0 0 1 3 -3h5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.od7ielbue {
  d: path("M11 9.5 8.5 12l2.5 2.5");
}

.s7eyaw7qq {
  d: path("M15 4v16");
}
</style><g class="nrj6p8qat"><path class="n48w5yb-p"/><path class="s7eyaw7qq"/><path class="od7ielbue"/></g>`,
		"fallback": "iconmind:panel-right-open-outline-regular",
	});
}

export default Component;

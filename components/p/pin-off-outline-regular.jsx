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
		"content": `<style>.c7kjqqh8k {
  d: path("M7 7a3 3 0 1 0 6 0 3 3 0 1 0 -6 0");
}

.dsyn-2b9s {
  d: path("M10 10v7");
}

.nnj9-vbsr {
  d: path("M5 21 19 7");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c7kjqqh8k"/><path class="dsyn-2b9s"/><path class="nnj9-vbsr"/></g>`,
		"fallback": "iconmind:pin-off-outline-regular",
	});
}

export default Component;

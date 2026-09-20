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
		"content": `<style>.itq_ntb3g {
  d: path("M11 16v5");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.ra07l749q {
  d: path("M5 16v-6a6 6 0 0 1 12 0v6Z");
}

.zawirs49s {
  d: path("M8 11h6");
}
</style><g class="nrj6p8qat"><path class="ra07l749q"/><path class="zawirs49s"/><path class="itq_ntb3g"/></g>`,
		"fallback": "iconmind:letterbox-outline-regular",
	});
}

export default Component;

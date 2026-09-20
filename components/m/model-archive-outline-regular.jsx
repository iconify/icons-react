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
		"content": `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.o3xv3zb-q {
  d: path("M3 15v6h18v-6");
}

.ulgy3xb-n {
  d: path("m12 3 5 5 -5 5 -5 -5Z");
}
</style><g class="nrj6p8qat"><path class="ulgy3xb-n"/><path class="o3xv3zb-q"/></g>`,
		"fallback": "iconmind:model-archive-outline-regular",
	});
}

export default Component;

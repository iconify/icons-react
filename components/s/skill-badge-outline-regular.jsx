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
		"content": `<style>.n-7xnfbas {
  d: path("m12 3 7 7v4l-7 7 -7 -7v-4Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.vtc00ob6f {
  d: path("m8 10 3 3 5 -5");
}
</style><g class="nrj6p8qat"><path class="n-7xnfbas"/><path class="vtc00ob6f"/></g>`,
		"fallback": "iconmind:skill-badge-outline-regular",
	});
}

export default Component;

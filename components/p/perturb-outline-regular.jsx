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

.ozi-k-boi {
  d: path("M3 7h18");
}

.ph2id7bdf {
  d: path("m3 15 3 -3 3 3 3 -3 3 3 3 -3 3 3");
}
</style><g class="nrj6p8qat"><path class="ozi-k-boi"/><path class="ph2id7bdf"/></g>`,
		"fallback": "iconmind:perturb-outline-regular",
	});
}

export default Component;

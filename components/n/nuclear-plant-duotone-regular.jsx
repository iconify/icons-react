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
		"content": `<style>.c81ltlb2m {
  fill: currentColor;
  d: path("m7 20 2 -2V9h6v9l2 2Z");
  opacity: var(--svg-opacity--0-2, 0.2);
  stroke: none;
}

.dj0q8oblb {
  d: path("M12 2a2.5 2.5 0 0 1 0 5");
}

.morp7_b7k {
  d: path("M12 12a2.5 2.5 0 0 1 0 -5");
}

.nk2bhslfp {
  d: path("m7 20 2 -2V9h6v9l2 2Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="c81ltlb2m"/><path class="nk2bhslfp"/><path class="morp7_b7k"/><path class="dj0q8oblb"/></g>`,
		"fallback": "iconmind:nuclear-plant-duotone-regular",
	});
}

export default Component;

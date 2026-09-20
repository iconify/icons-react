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
		"content": `<style>.gwsin5eat {
  stroke-width: var(--svg-stroke-width--5px, 5px);
  d: path("M4 18h4v-4h4v-4h4V6h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}

.naqjrf_pr {
  d: path("M4 18h4v-4h4v-4h4V6h4");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}
</style><g class="nrj6p8qat"><path class="gwsin5eat"/><path class="naqjrf_pr"/></g>`,
		"fallback": "iconmind:quantization-duotone-regular",
	});
}

export default Component;

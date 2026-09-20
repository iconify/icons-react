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
		"content": `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.naqjrf_pr {
  d: path("M4 18h4v-4h4v-4h4V6h4");
}

.zx2md05te {
  stroke-width: var(--svg-stroke-width--4-5px, 4.5px);
  d: path("M4 18h4v-4h4v-4h4V6h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="hntgybcog"><path class="zx2md05te"/><path class="naqjrf_pr"/></g>`,
		"fallback": "iconmind:quantization-duotone-thin",
	});
}

export default Component;

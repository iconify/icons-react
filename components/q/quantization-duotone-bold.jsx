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
		"content": `<style>.naqjrf_pr {
  d: path("M4 18h4v-4h4v-4h4V6h4");
}

.s0phu2bbs {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2-5px, 2.5px);
}

.v2w1pjbld {
  stroke-width: var(--svg-stroke-width--5-5px, 5.5px);
  d: path("M4 18h4v-4h4v-4h4V6h4");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="s0phu2bbs"><path class="v2w1pjbld"/><path class="naqjrf_pr"/></g>`,
		"fallback": "iconmind:quantization-duotone-bold",
	});
}

export default Component;

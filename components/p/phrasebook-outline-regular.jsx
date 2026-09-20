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
		"content": `<style>.d3xn50bni {
  d: path("M4 4a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v16a2 2 0 0 1 -2 2H6a2 2 0 0 1 -2 -2Z");
}

.m0wg_2sjy {
  d: path("M11 7v4h3.5V7Z");
}

.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.oy7fa3gbk {
  d: path("M8 2v20");
}

.xoh5qp2um {
  d: path("M11 14v4h3.5v-4Z");
}
</style><g class="nrj6p8qat"><path class="d3xn50bni"/><path class="oy7fa3gbk"/><path class="m0wg_2sjy"/><path class="xoh5qp2um"/></g>`,
		"fallback": "iconmind:phrasebook-outline-regular",
	});
}

export default Component;

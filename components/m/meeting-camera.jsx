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

.jhg47lbhu {
  d: path("M6.875 6.5h4.25a4.375 4.375 0 0 1 4.375 4.375v2.25a4.375 4.375 0 0 1-4.375 4.375h-4.25A4.375 4.375 0 0 1 2.5 13.125v-2.25A4.375 4.375 0 0 1 6.875 6.5");
}

.skd2pyz0k {
  d: path("m16.244 10.066l3-1.75A1.5 1.5 0 0 1 21.5 9.612v4.776a1.5 1.5 0 0 1-2.256 1.296l-3-1.75a1.5 1.5 0 0 1-.744-1.296v-1.276a1.5 1.5 0 0 1 .744-1.296");
}
</style><g class="hntgybcog"><path class="jhg47lbhu"/><path class="skd2pyz0k"/></g>`,
		"fallback": "uix:meeting-camera",
	});
}

export default Component;

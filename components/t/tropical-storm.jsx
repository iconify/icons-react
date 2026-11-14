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

.vxo3gieyf {
  d: path("M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0");
}

.zmnqxowqc {
  d: path("M9 12c0-5.5 5-8 9.5-8M15 12c0 5.5-5 8-9.5 8M5 3S3 5.5 3 6.75a2 2 0 0 0 4 0C7 5.5 5 3 5 3m14 12.25s-2 2.5-2 3.75a2 2 0 0 0 4 0c0-1.25-2-3.75-2-3.75");
}
</style><g class="hntgybcog"><path class="vxo3gieyf"/><path class="zmnqxowqc"/></g>`,
		"fallback": "uix:tropical-storm",
	});
}

export default Component;

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
		"content": `<style>.hneliqdkn {
  d: path("M2.5 4h19v16h-19Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w-_qa_bxp {
  d: path("m12 4l-1.5 4l3 4l-3 4l1.5 4");
}
</style><g class="ulnmmdpxh"><path class="hneliqdkn"/><path class="w-_qa_bxp"/></g>`,
		"fallback": "uix-sharp:split",
	});
}

export default Component;
